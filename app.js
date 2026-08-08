const PLANS = [
  {
    name: "Upper A",
    duration: "42 min",
    focus: "Chest · Back · Shoulders",
    exercises: [
      ["Flat Dumbbell Press", "Chest", "4 × 6–8"],
      ["One-Arm Row", "Back", "4 × 8–10"],
      ["Seated Dumbbell Press", "Shoulders", "3 × 8–10"],
      ["Pull-up / Assisted", "Back", "3 × 6–10"],
      ["Cable Curl", "Arms", "3 × 10–12"],
    ],
  },
  {
    name: "Lower A",
    duration: "46 min",
    focus: "Quads · Hamstrings · Calves",
    exercises: [
      ["Front Squat", "Legs", "4 × 6–8"],
      ["Romanian Deadlift", "Legs", "3 × 8–10"],
      ["Leg Press", "Legs", "3 × 12–15"],
      ["Leg Curl", "Legs", "3 × 12–15"],
      ["Standing Calf Raise", "Legs", "4 × 15–20"],
    ],
  },
  {
    name: "Upper B",
    duration: "40 min",
    focus: "Chest · Back · Arms",
    exercises: [
      ["Incline Barbell Press", "Chest", "4 × 8–10"],
      ["Chest-Supported Row", "Back", "4 × 10–12"],
      ["Cable Lateral Raise", "Shoulders", "4 × 12–15"],
      ["Rope Pushdown", "Arms", "3 × 12–15"],
      ["EZ-Bar Curl", "Arms", "3 × 10–12"],
    ],
  },
  {
    name: "Spartan Circuit",
    duration: "32 min",
    focus: "Full body · Conditioning",
    exercises: [
      ["Burpee", "Full body", "4 × 12"],
      ["Push-up", "Chest", "4 × 15"],
      ["Jump Squat", "Legs", "4 × 15"],
      ["Mountain Climber", "Core", "4 × 30 sec"],
      ["Forearm Plank", "Core", "3 × 45 sec"],
    ],
  },
];

const HOME_EXERCISES = [
  {
    id: "bodyweight-squat",
    name: "Bodyweight Squat",
    level: "Beginner",
    focus: "Lower body",
    equipment: "No equipment",
    image: "/assets/bodyweight-squat.webp",
    videoId: "P-yaD24bUE8",
    duration: 45,
    prescription: "3 sets × 12 reps",
    cues: ["Chest tall", "Knees track over toes", "Hips back"],
  },
  {
    id: "push-up",
    name: "Push-up",
    level: "Beginner",
    focus: "Upper body",
    equipment: "No equipment",
    image: "/assets/push-up.webp",
    videoId: "7dXB7ZdOhf4",
    duration: 40,
    prescription: "3 sets × 8 reps",
    cues: ["Hands under shoulders", "Body stays in one line", "Elbows angle back"],
  },
  {
    id: "forearm-plank",
    name: "Forearm Plank",
    level: "Beginner",
    focus: "Core",
    style: "Isometric",
    equipment: "Exercise mat",
    image: "/assets/forearm-plank.webp",
    videoId: "A2b2EmIg0dA",
    duration: 30,
    prescription: "3 holds × 30 sec",
    cues: ["Elbows under shoulders", "Ribs tucked", "Straight head-to-heels line"],
  },
  {
    id: "reverse-lunge",
    name: "Reverse Lunge",
    level: "Beginner",
    focus: "Lower body",
    equipment: "No equipment",
    image: "/assets/reverse-lunge.webp",
    videoId: "u_zSfK5ZFU4",
    duration: 45,
    prescription: "3 sets × 10 each",
    cues: ["Front knee stays stacked", "Torso stays upright", "Back heel stays lifted"],
  },
  {
    id: "mountain-climber",
    name: "Mountain Climber",
    level: "Intermediate",
    focus: "Core",
    equipment: "No equipment",
    image: "/assets/mountain-climber.webp",
    videoId: "BhERlhtzQ1s",
    duration: 30,
    prescription: "4 rounds × 30 sec",
    cues: ["Shoulders over wrists", "Hips stay level", "Drive knee toward chest"],
  },
  {
    id: "glute-bridge",
    name: "Glute Bridge",
    level: "Beginner",
    focus: "Lower body",
    equipment: "Exercise mat",
    image: "/assets/glute-bridge.webp",
    videoId: "OUgsJ8-Vi0E",
    duration: 45,
    prescription: "3 sets × 15 reps",
    cues: ["Knees align over ankles", "Ribs stay down", "Finish with glutes"],
  },
  {
    id: "bird-dog",
    name: "Bird Dog",
    level: "Beginner",
    focus: "Core",
    equipment: "Exercise mat",
    image: "/assets/bird-dog.webp",
    videoId: "KA0ekfSePrQ",
    duration: 45,
    prescription: "3 sets × 8 each",
    cues: ["Hips stay square", "Reach long, not high", "Keep a neutral spine"],
  },
  {
    id: "dead-bug",
    name: "Dead Bug",
    level: "Beginner",
    focus: "Core",
    equipment: "Exercise mat",
    image: "/assets/dead-bug.webp",
    videoId: "g_BYB0R-4Ws",
    duration: 45,
    prescription: "3 sets × 8 each",
    cues: ["Lower back stays grounded", "Move opposite limbs", "Exhale as you extend"],
  },
  {
    id: "low-squat-hold",
    name: "Low Squat Hold",
    level: "Beginner",
    focus: "Lower body",
    style: "Isometric",
    equipment: "No equipment",
    image: "/assets/bodyweight-squat.webp",
    videoId: "P-yaD24bUE8",
    duration: 30,
    prescription: "3 holds × 20–30 sec",
    cues: ["Sit hips back to a pain-free depth", "Keep chest tall", "Press knees gently outward"],
  },
  {
    id: "push-up-hold",
    name: "Push-up Hold",
    level: "Intermediate",
    focus: "Upper body",
    style: "Isometric",
    equipment: "No equipment",
    image: "/assets/push-up.webp",
    videoId: "7dXB7ZdOhf4",
    duration: 20,
    prescription: "3 holds × 10–20 sec",
    cues: ["Pause at a strong pain-free depth", "Keep body in one line", "Breathe without dropping the hips"],
  },
  {
    id: "glute-bridge-hold",
    name: "Glute Bridge Hold",
    level: "Beginner",
    focus: "Lower body",
    style: "Isometric",
    equipment: "Exercise mat",
    image: "/assets/glute-bridge.webp",
    videoId: "OUgsJ8-Vi0E",
    duration: 30,
    prescription: "3 holds × 20–30 sec",
    cues: ["Hold hips level", "Keep ribs down", "Squeeze glutes without arching the back"],
  },
  {
    id: "bird-dog-hold",
    name: "Bird Dog Hold",
    level: "Beginner",
    focus: "Core",
    style: "Isometric",
    equipment: "Exercise mat",
    image: "/assets/bird-dog.webp",
    videoId: "KA0ekfSePrQ",
    duration: 20,
    prescription: "3 holds × 15 sec each",
    cues: ["Keep hips square to the floor", "Reach long through fingertips and heel", "Brace without holding your breath"],
  },
  {
    id: "dead-bug-hold",
    name: "Dead Bug Hold",
    level: "Beginner",
    focus: "Core",
    style: "Isometric",
    equipment: "Exercise mat",
    image: "/assets/dead-bug.webp",
    videoId: "g_BYB0R-4Ws",
    duration: 20,
    prescription: "3 holds × 15 sec each",
    cues: ["Pin lower back gently to the mat", "Reach opposite arm and leg long", "Breathe slowly through the hold"],
  },
  {
    id: "reverse-lunge-hold",
    name: "Reverse Lunge Hold",
    level: "Beginner",
    focus: "Lower body",
    style: "Isometric",
    equipment: "No equipment",
    image: "/assets/reverse-lunge.webp",
    videoId: "u_zSfK5ZFU4",
    duration: 20,
    prescription: "3 holds × 15–20 sec each",
    cues: ["Stack front knee over the ankle", "Keep torso tall", "Hold both hips facing forward"],
  },
];

const CHALLENGES = [
  {
    id: "abs30",
    name: "Six-Pack Abs 30",
    source: "CORE CONSISTENCY",
    detail: "Progressive planks, mountain climbers, dead bugs, and bird dogs.",
    exerciseIds: ["forearm-plank", "mountain-climber", "dead-bug", "bird-dog"],
  },
  {
    id: "full30",
    name: "Full-Body 30",
    source: "NO EQUIPMENT",
    detail: "Squats, push-ups, lunges, glute work, and controlled core training.",
    exerciseIds: ["bodyweight-squat", "push-up", "reverse-lunge", "glute-bridge", "mountain-climber", "forearm-plank"],
  },
  {
    id: "isometric30",
    name: "Isometric Strength 30",
    source: "CONTROLLED HOLDS",
    detail: "Build full-body strength with low-impact timed holds and steady breathing.",
    exerciseIds: ["low-squat-hold", "push-up-hold", "glute-bridge-hold", "forearm-plank", "bird-dog-hold", "dead-bug-hold", "reverse-lunge-hold"],
  },
  {
    id: "push30",
    name: "Push-Up Builder",
    source: "UPPER BODY",
    detail: "Push-up practice supported by planks, bird dogs, and shoulder stability.",
    exerciseIds: ["push-up", "forearm-plank", "bird-dog", "dead-bug"],
  },
];

const safeRead = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
};

const state = {
  workouts: safeRead("pulsefit2", []),
  cardio: safeRead("pf_cardio", []),
  body: safeRead("pf_body", []),
  challenges: safeRead("pf_ch", {}),
  water: safeRead("pf_water", { d: "", ml: 0 }),
  favorites: safeRead("pf_favorites", []),
  challengeSelection: {},
  activeExercise: HOME_EXERCISES[0],
  filter: "All",
  duration: 45,
  guidedRemaining: 45,
  guidedRunning: false,
  guidedInterval: null,
  completedMovements: Number(localStorage.getItem("pf_completed_movements") || 0),
};

const todayKey = () => new Date().toDateString();
if (state.water.d !== todayKey()) state.water = { d: todayKey(), ml: 0 };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const saveState = () => {
  localStorage.setItem("pulsefit2", JSON.stringify(state.workouts));
  localStorage.setItem("pf_cardio", JSON.stringify(state.cardio));
  localStorage.setItem("pf_body", JSON.stringify(state.body));
  localStorage.setItem("pf_ch", JSON.stringify(state.challenges));
  localStorage.setItem("pf_water", JSON.stringify(state.water));
  localStorage.setItem("pf_favorites", JSON.stringify(state.favorites));
  localStorage.setItem("pf_completed_movements", String(state.completedMovements));
};

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const formatDate = (timestamp) => new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(new Date(timestamp));
const isRecent = (timestamp, days = 7) => timestamp > Date.now() - days * 864e5;

const showToast = (message) => {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning, AJ";
  if (hour < 18) return "Good afternoon, AJ";
  return "Good evening, AJ";
};

const renderDateAndGreeting = () => {
  $("#todayDate").textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date()).toUpperCase();
  $("#greeting").textContent = getGreeting();
};

const renderTodaySession = () => {
  $("#todaySessionList").innerHTML = PLANS[0].exercises
    .map(
      ([name, muscle, rx], index) => `
        <div class="session-row">
          <span class="session-number">${index + 1}</span>
          <div><strong>${name}</strong><small>${muscle}</small></div>
          <span>${rx}</span>
        </div>`
    )
    .join("");
};

const renderStats = () => {
  const workouts = state.workouts;
  const volume = workouts.reduce((sum, item) => sum + (Number(item.vol) || 0), 0);
  const minutes = workouts.reduce((sum, item) => sum + (Number(item.min) || 0), 0);
  const days = new Set([
    ...workouts.map((item) => new Date(item.date).toDateString()),
    ...state.cardio.map((item) => new Date(item.date).toDateString()),
  ]).size;
  const weekly = workouts.filter((item) => isRecent(item.date)).length;

  $("#statWorkouts").textContent = formatNumber(workouts.length);
  $("#statMinutes").textContent = formatNumber(minutes);
  $("#statVolume").textContent = `${formatNumber(volume)} kg`;
  $("#statDays").textContent = formatNumber(days);
  $("#weeklyProgress").textContent = `${Math.min(weekly, 4)}/4`;
  $("#weeklyBar").style.width = `${Math.min(100, weekly * 25)}%`;
};

const renderWater = () => {
  $("#waterNow").textContent = `${formatNumber(state.water.ml)} ml`;
  $("#waterBar").style.width = `${Math.min(100, state.water.ml / 20)}%`;
};

const renderPlans = () => {
  $("#planGrid").innerHTML = PLANS.map(
    (plan, index) => `
      <article class="plan-card">
        <span class="eyebrow">DAY ${index + 1} · ${plan.duration}</span>
        <h3>${plan.name}</h3>
        <p>${plan.focus}<br>${plan.exercises.length} deliberate movements</p>
        <button class="primary-button" type="button" data-plan="${index}"><i class="ph ph-play"></i> Start ${plan.name}</button>
      </article>`
  ).join("");

  $$("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = PLANS[Number(button.dataset.plan)];
      showToast(`${plan.name} is ready — move with control.`);
      openExercise(HOME_EXERCISES.find((exercise) => plan.exercises.some(([name]) => name.includes(exercise.name.split(" ")[0]))) || HOME_EXERCISES[0]);
    });
  });
};

const challengeExercisesForDay = (challenge, day) => {
  const exerciseCount = day > 20 ? 3 : 2;
  const offset = (day - 1) % challenge.exerciseIds.length;
  return Array.from({ length: exerciseCount }, (_, index) => {
    const exerciseId = challenge.exerciseIds[(offset + index) % challenge.exerciseIds.length];
    return HOME_EXERCISES.find((exercise) => exercise.id === exerciseId);
  }).filter(Boolean);
};

const challengeExerciseButton = (exercise) => `
  <button class="challenge-exercise" type="button" data-challenge-exercise="${exercise.id}" aria-label="View ${exercise.name} proper posture and video">
    <img src="${exercise.image}" alt="${exercise.name} proper posture" loading="lazy" />
    <span class="challenge-exercise-copy">
      <small><i class="ph ph-images"></i> POSTURE + VIDEO</small>
      <strong>${exercise.name}</strong>
      <span>${exercise.prescription}</span>
    </span>
    <span class="challenge-exercise-play" aria-hidden="true"><i class="ph-fill ph-play"></i></span>
  </button>`;

const renderChallenges = () => {
  $("#challengeGrid").innerHTML = CHALLENGES.map((challenge) => {
    const completed = state.challenges[challenge.id] || [];
    const selectedDay = state.challengeSelection[challenge.id] || Array.from({ length: 30 }, (_, index) => index + 1).find((day) => !completed.includes(day)) || 30;
    const selectedExercises = challengeExercisesForDay(challenge, selectedDay);
    const selectedDayComplete = completed.includes(selectedDay);
    return `
      <article class="challenge-card">
        <span class="eyebrow">${challenge.source}</span>
        <h3>${challenge.name}</h3>
        <p>${completed.length}/30 days complete · ${challenge.detail}</p>
        <div class="progress-track"><span style="width:${(completed.length / 30) * 100}%"></span></div>
        <section class="challenge-day-guide" aria-label="Day ${selectedDay} exercise guides">
          <div class="challenge-guide-heading">
            <div><span>DAY ${selectedDay}</span><strong>Posture & movement guides</strong></div>
            <small>Tap an exercise to learn proper form and watch its video.</small>
          </div>
          <div class="challenge-exercise-list">
            ${selectedExercises.map(challengeExerciseButton).join("")}
          </div>
          <button class="challenge-complete ${selectedDayComplete ? "is-complete" : ""}" type="button" data-challenge-complete="${challenge.id}" data-day="${selectedDay}">
            <i class="ph ${selectedDayComplete ? "ph-arrow-counter-clockwise" : "ph-check-circle"}"></i>
            ${selectedDayComplete ? `Mark day ${selectedDay} incomplete` : `Complete day ${selectedDay}`}
          </button>
        </section>
        <div class="challenge-days">
          ${Array.from({ length: 30 }, (_, index) => {
            const day = index + 1;
            const classes = [completed.includes(day) ? "is-done" : "", selectedDay === day ? "is-selected" : ""].filter(Boolean).join(" ");
            return `<button type="button" class="${classes}" data-challenge-day="${challenge.id}" data-day="${day}" aria-label="View day ${day} exercises" aria-pressed="${selectedDay === day}">${day}</button>`;
          }).join("")}
        </div>
      </article>`;
  }).join("");

  $$("[data-challenge-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.challengeSelection[button.dataset.challengeDay] = Number(button.dataset.day);
      renderChallenges();
    });
  });

  $$("[data-challenge-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      openExercise(HOME_EXERCISES.find((exercise) => exercise.id === button.dataset.challengeExercise));
    });
  });

  $$("[data-challenge-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const { challengeComplete: challenge, day } = button.dataset;
      const value = Number(day);
      const completed = state.challenges[challenge] || [];
      const index = completed.indexOf(value);
      index >= 0 ? completed.splice(index, 1) : completed.push(value);
      state.challenges[challenge] = completed.sort((a, b) => a - b);
      saveState();
      renderChallenges();
      renderBadges();
      showToast(index >= 0 ? `Day ${value} marked incomplete.` : `Day ${value} complete — strong work.`);
    });
  });
};

const exerciseCard = (exercise) => `
  <article class="exercise-card" tabindex="0" role="button" data-exercise="${exercise.id}" aria-label="Open ${exercise.name} form guide">
    <div class="exercise-image">
      <img src="${exercise.image}" alt="${exercise.name} proper posture" loading="lazy" />
      <span class="exercise-media-badge"><i class="ph ph-images"></i> PHOTO + VIDEO</span>
    </div>
    <div class="exercise-body">
      <span>${exercise.focus}</span>
      <h3>${exercise.name}</h3>
      <p>${exercise.level} · ${exercise.style ? `${exercise.style} · ` : ""}${exercise.equipment}</p>
    </div>
  </article>`;

const renderExercises = () => {
  const query = $("#exerciseSearch").value.trim().toLowerCase();
  const items = HOME_EXERCISES.filter((exercise) => {
    const matchesFilter = state.filter === "All" || exercise.focus === state.filter || exercise.style === state.filter;
    const matchesQuery = !query || `${exercise.name} ${exercise.focus} ${exercise.style || ""} ${exercise.cues.join(" ")}`.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  $("#homeExerciseGrid").innerHTML = items.length
    ? items.map(exerciseCard).join("")
    : '<div class="empty-state">No home exercises match that search.</div>';

  $$("[data-exercise]").forEach((card) => {
    const activate = () => openExercise(HOME_EXERCISES.find((exercise) => exercise.id === card.dataset.exercise));
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
};

const videoPreview = (exercise) => `
  <img src="https://i.ytimg.com/vi/${exercise.videoId}/hqdefault.jpg" alt="${exercise.name} movement demonstration video" />
  <span class="video-shade"></span>
  <button class="video-play" type="button" id="playExerciseVideo" aria-label="Play ${exercise.name} demonstration"><i class="ph-fill ph-play"></i></button>
  <div class="video-meta"><span>1:12</span><span class="video-track"></span><i class="ph ph-closed-captioning"></i></div>`;

const openExercise = (exercise) => {
  if (!exercise) return;
  state.activeExercise = exercise;
  state.duration = exercise.duration;
  $("#detailTitle").textContent = exercise.name;
  $("#detailMeta").textContent = `${exercise.level} · ${exercise.focus}${exercise.style ? ` · ${exercise.style}` : ""} · ${exercise.equipment}`;
  $("#detailImage").src = exercise.image;
  $("#detailImage").alt = `${exercise.name} proper posture`;
  $("#cueOverlay").innerHTML = exercise.cues.map((cue) => `<span class="cue-pill">${cue}</span>`).join("");
  $("#formChecklist").innerHTML = exercise.cues.map((cue) => `<li><i class="ph-fill ph-check-circle"></i>${cue}</li>`).join("");
  $("#prescriptionText").textContent = exercise.prescription;
  $("#durationValue").textContent = state.duration;
  $("#movementCount").textContent = Math.min(4, state.completedMovements + 1);
  $("#videoFrame").innerHTML = videoPreview(exercise);

  const favorite = state.favorites.includes(exercise.id);
  $("#favoriteExercise").classList.toggle("is-saved", favorite);
  $("#favoriteExercise i").className = favorite ? "ph-fill ph-bookmark-simple" : "ph ph-bookmark-simple";

  const dialog = $("#exerciseDialog");
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = "hidden";

  $("#playExerciseVideo").addEventListener("click", () => playVideo(exercise));
};

const playVideo = (exercise) => {
  const dialog = $("#exerciseDialog");
  const scrollPosition = dialog.scrollTop;
  const videoFrame = $("#videoFrame");
  videoFrame.insertAdjacentHTML("beforeend", `
    <iframe
      style="z-index: 4"
      src="https://www.youtube-nocookie.com/embed/${exercise.videoId}?autoplay=1&rel=0"
      title="${exercise.name} proper form video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>`);

  const restoreDialogPosition = () => { dialog.scrollTop = scrollPosition; };
  requestAnimationFrame(restoreDialogPosition);
  videoFrame.querySelector("iframe").addEventListener("load", restoreDialogPosition, { once: true });
};

const closeExercise = () => {
  $("#exerciseDialog").close();
  $("#videoFrame").innerHTML = "";
  document.body.style.overflow = "";
};

const toggleFavorite = () => {
  const id = state.activeExercise.id;
  const index = state.favorites.indexOf(id);
  if (index >= 0) state.favorites.splice(index, 1);
  else state.favorites.push(id);
  saveState();
  const isSaved = state.favorites.includes(id);
  $("#favoriteExercise").classList.toggle("is-saved", isSaved);
  $("#favoriteExercise i").className = isSaved ? "ph-fill ph-bookmark-simple" : "ph ph-bookmark-simple";
  showToast(isSaved ? "Saved to your home favorites." : "Removed from favorites.");
};

const updateDuration = (delta) => {
  state.duration = Math.max(15, Math.min(180, state.duration + delta));
  $("#durationValue").textContent = state.duration;
};

const openGuided = () => {
  const exercise = state.activeExercise;
  state.guidedRemaining = state.duration;
  state.guidedRunning = true;
  $("#guidedImage").src = exercise.image;
  $("#guidedImage").alt = `${exercise.name} proper posture`;
  $("#guidedExerciseName").textContent = exercise.name;
  $("#guidedTimer").textContent = state.guidedRemaining;
  $("#guidedCue").textContent = exercise.cues[0];
  $("#guidedToggle").innerHTML = '<i class="ph ph-pause"></i> Pause';
  $("#guidedDialog").showModal();
  clearInterval(state.guidedInterval);
  state.guidedInterval = setInterval(tickGuidedTimer, 1000);
};

const tickGuidedTimer = () => {
  if (!state.guidedRunning) return;
  state.guidedRemaining -= 1;
  $("#guidedTimer").textContent = Math.max(0, state.guidedRemaining);
  const cueIndex = Math.floor((state.duration - state.guidedRemaining) / Math.max(1, state.duration / state.activeExercise.cues.length));
  $("#guidedCue").textContent = state.activeExercise.cues[Math.min(state.activeExercise.cues.length - 1, cueIndex)];
  if (state.guidedRemaining <= 0) completeGuided();
};

const toggleGuided = () => {
  state.guidedRunning = !state.guidedRunning;
  $("#guidedToggle").innerHTML = state.guidedRunning
    ? '<i class="ph ph-pause"></i> Pause'
    : '<i class="ph ph-play"></i> Resume';
};

const closeGuided = () => {
  clearInterval(state.guidedInterval);
  state.guidedRunning = false;
  if ($("#guidedDialog").open) $("#guidedDialog").close();
};

const completeGuided = () => {
  const exercise = state.activeExercise;
  closeGuided();
  if ($("#exerciseDialog").open) closeExercise();
  state.completedMovements = (state.completedMovements + 1) % 4;
  state.workouts.unshift({
    name: `Home · ${exercise.name}`,
    date: Date.now(),
    min: Math.max(1, Math.round(state.duration / 60)),
    vol: 0,
    muscles: [exercise.focus],
  });
  saveState();
  renderStats();
  renderProgress();
  showToast(`${exercise.name} complete. Strong, controlled work.`);
};

const renderCardio = () => {
  const weekly = state.cardio.filter((item) => isRecent(item.date));
  const distance = weekly.reduce((sum, item) => sum + Number(item.km || 0), 0);
  const minutes = weekly.reduce((sum, item) => sum + Number(item.min || 0), 0);
  $("#cardioWeekKm").textContent = `${distance.toFixed(1)} km`;
  $("#cardioWeekSummary").textContent = weekly.length ? `${weekly.length} activities · ${minutes} minutes` : "No activities logged yet.";
  $("#cardioFeed").innerHTML = state.cardio.length
    ? state.cardio.slice(0, 6).map((item) => `
      <div class="history-item">
        <div><strong>${item.type} · ${Number(item.km).toFixed(1)} km</strong><small>${formatDate(item.date)}</small></div>
        <span>${item.min} min</span>
      </div>`).join("")
    : '<div class="empty-state">Your first cardio session will appear here.</div>';
};

const renderBody = () => {
  const latest = state.body[0];
  if (!latest) {
    $("#bodyNow").textContent = "—";
    $("#bmiText").textContent = "Log a weight to see your latest reading.";
  } else {
    $("#bodyNow").textContent = `${latest.w} kg`;
    const bmi = latest.h ? latest.w / ((latest.h / 100) ** 2) : null;
    $("#bmiText").textContent = bmi ? `BMI ${bmi.toFixed(1)} · ${bmi < 18.5 ? "below range" : bmi < 25 ? "healthy range" : bmi < 30 ? "above range" : "high range"}` : "Add height to calculate BMI.";
  }
  $("#bodyFeed").innerHTML = state.body.length
    ? state.body.slice(0, 6).map((item) => `
      <div class="history-item">
        <div><strong>${item.w} kg</strong><small>${formatDate(item.date)}${item.f ? ` · ${item.f}% body fat` : ""}</small></div>
        <span>${item.wa ? `${item.wa} cm` : ""}</span>
      </div>`).join("")
    : '<div class="empty-state">Your measurements will build a simple history here.</div>';
};

const renderProgress = () => {
  $("#workoutHistory").innerHTML = state.workouts.length
    ? state.workouts.slice(0, 12).map((item) => `
      <div class="history-item">
        <div><strong>${item.name}</strong><small>${formatDate(item.date)} · ${item.min || 1} min</small></div>
        <span>${item.vol ? `${formatNumber(item.vol)} kg` : '<i class="ph ph-check-circle"></i>'}</span>
      </div>`).join("")
    : '<div class="empty-state">Complete a guided set or workout to begin your history.</div>';
  renderBadges();
};

const renderBadges = () => {
  const totalVolume = state.workouts.reduce((sum, item) => sum + (Number(item.vol) || 0), 0);
  const uniqueDays = new Set(state.workouts.map((item) => new Date(item.date).toDateString())).size;
  const badges = [
    ["ph-sparkle", "First workout", state.workouts.length >= 1],
    ["ph-number-circle-ten", "10 workouts", state.workouts.length >= 10],
    ["ph-mountains", "10,000 kg", totalVolume >= 10000],
    ["ph-calendar-check", "7 training days", uniqueDays >= 7],
    ["ph-drop", "Hydration goal", state.water.ml >= 2000],
    ["ph-medal", "30-day challenge", Object.values(state.challenges).some((days) => days.length >= 30)],
  ];
  $("#badgeGrid").innerHTML = badges.map(([icon, label, earned]) => `
    <div class="milestone ${earned ? "" : "is-locked"}"><i class="ph ${icon}"></i><span>${label}</span></div>
  `).join("");
};

const goPage = (target, updateHistory = true) => {
  const valid = ["today", "plan", "cardio", "body", "library", "progress"].includes(target) ? target : "today";
  $$(".app-page").forEach((page) => page.classList.toggle("is-active", page.dataset.page === valid));
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.target === valid));
  if (updateHistory) history.pushState({ page: valid }, "", valid === "today" ? "/" : `/${valid}`);
  document.title = `${valid[0].toUpperCase() + valid.slice(1)} · PulseFit`;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const pathToPage = () => location.pathname.split("/").filter(Boolean)[0] || "today";

let deferredInstallPrompt = null;
const isIosDevice = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandaloneApp = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

const updateInstallButton = () => {
  const button = $("#installAppButton");
  if (!button) return;
  button.hidden = isStandaloneApp() || (!deferredInstallPrompt && !isIosDevice);
};

const installPulseFit = async () => {
  if (deferredInstallPrompt) {
    await deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallButton();
    showToast(outcome === "accepted" ? "PulseFit is being installed." : "Installation cancelled.");
    return;
  }

  if (isIosDevice) showToast("On iPhone: tap Share, then Add to Home Screen.");
};

const enableInstallExperience = () => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    showToast("PulseFit installed successfully.");
  });

  $("#installAppButton").addEventListener("click", installPulseFit);
  updateInstallButton();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        showToast("Offline setup will retry next time.");
      });
    });
  }
};

const bindEvents = () => {
  $$(".nav-item").forEach((item) => item.addEventListener("click", () => goPage(item.dataset.target)));
  window.addEventListener("popstate", () => goPage(pathToPage(), false));

  $$("[data-water]").forEach((button) => {
    button.addEventListener("click", () => {
      state.water.ml += Number(button.dataset.water);
      saveState();
      renderWater();
      renderBadges();
      showToast("Hydration updated.");
    });
  });

  $("#startTodayButton").addEventListener("click", () => goPage("plan"));
  $("#viewSessionButton").addEventListener("click", () => goPage("plan"));

  $("#exerciseSearch").addEventListener("input", renderExercises);
  $$(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.filter = chip.dataset.filter;
      $$(".filter-chip").forEach((item) => item.classList.toggle("is-active", item === chip));
      renderExercises();
    });
  });

  $("#closeExercise").addEventListener("click", closeExercise);
  $("#favoriteExercise").addEventListener("click", toggleFavorite);
  $("#durationDown").addEventListener("click", () => updateDuration(-15));
  $("#durationUp").addEventListener("click", () => updateDuration(15));
  $("#startGuidedSet").addEventListener("click", openGuided);
  $("#closeGuided").addEventListener("click", closeGuided);
  $("#guidedToggle").addEventListener("click", toggleGuided);
  $("#completeGuided").addEventListener("click", completeGuided);

  $("#exerciseDialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    closeExercise();
  });
  $("#guidedDialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    closeGuided();
  });

  $("#cardioForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const km = Number($("#cardioKm").value);
    const min = Number($("#cardioMinutes").value);
    state.cardio.unshift({ type: $("#cardioType").value, km, min, date: Date.now() });
    event.currentTarget.reset();
    saveState();
    renderCardio();
    renderStats();
    showToast("Cardio activity saved.");
  });

  $("#bodyForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.body.unshift({
      w: Number($("#bodyWeight").value),
      f: Number($("#bodyFat").value) || null,
      wa: Number($("#bodyWaist").value) || null,
      h: Number($("#bodyHeight").value) || state.body[0]?.h || null,
      date: Date.now(),
    });
    event.currentTarget.reset();
    saveState();
    renderBody();
    showToast("Body measurement saved.");
  });
};

const init = () => {
  renderDateAndGreeting();
  renderTodaySession();
  renderStats();
  renderWater();
  renderPlans();
  renderChallenges();
  renderExercises();
  renderCardio();
  renderBody();
  renderProgress();
  bindEvents();
  enableInstallExperience();
  goPage(pathToPage(), false);
  saveState();
};

init();
