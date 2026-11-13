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
  let inaccessible = false;
  return {
    read(key, fallback) {
      let raw;
      try { raw = getStorage().getItem(key); }
      catch { inaccessible = true; return fallback; }
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
        try { getStorage().setItem(key, JSON.stringify(value)); }
        catch { inaccessible = true; allSaved = false; }
      }
      return allSaved;
    },
    protectedKeys,
    get inaccessible() { return inaccessible; }
  };
}
