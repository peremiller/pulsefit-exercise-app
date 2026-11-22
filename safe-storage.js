// Non-destructive browser storage: malformed existing entries are never overwritten.
function compatible(key, value, fallback) {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(value)) return false;
    if (key === "pf_favorites") return value.every((entry) => typeof entry === "string");
    return value.every((entry) => entry !== null && typeof entry === "object" && !Array.isArray(entry));
  }
  if (typeof fallback === "number") return Number.isSafeInteger(value) && value >= 0;
  if (fallback && typeof fallback === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    if (key === "pf_ch") return Object.values(value).every((days) => Array.isArray(days) && days.every(Number.isSafeInteger));
    if (key === "pf_water") return typeof value.d === "string" && Number.isFinite(value.ml) && value.ml >= 0;
    return true;
  }
  return typeof value === typeof fallback;
}

export function createSafeStorage(getStorage) {
  const protectedKeys = new Set();
  const observed = new Map(); // Last raw value read or successfully saved in this tab.
  let inaccessible = false;
  return {
    read(key, fallback) {
      let raw;
      try { raw = getStorage().getItem(key); }
      catch { inaccessible = true; return fallback; }
      observed.set(key, raw);
      if (raw === null) return fallback;
      try {
        const parsed = JSON.parse(raw);
        if (compatible(key, parsed, fallback)) return parsed;
      } catch { /* Preserve malformed original bytes. */ }
      protectedKeys.add(key);
      return fallback;
    },
    saveMany(entries) {
      if (inaccessible) return false;
      let allSaved = true;
      for (const [key, value] of Object.entries(entries)) {
        if (protectedKeys.has(key)) { allSaved = false; continue; }
        try {
          // A circular object or BigInt is not a storage failure. Refuse only
          // that value; keep the remaining independent progress saveable.
          let encoded;
          try { encoded = JSON.stringify(value); }
          catch { allSaved = false; continue; }
          if (typeof encoded !== "string") { allSaved = false; continue; }
          const storage = getStorage();
          // Another tab may have modified this record after our initial read.
          // Preserve its bytes instead of overwriting unseen newer work.
          if (observed.has(key) && storage.getItem(key) !== observed.get(key)) {
            protectedKeys.add(key);
            allSaved = false;
            continue;
          }
          storage.setItem(key, encoded);
          observed.set(key, encoded);
        } catch { inaccessible = true; allSaved = false; }
      }
      return allSaved;
    },
    protectedKeys,
    get inaccessible() { return inaccessible; }
  };
}
