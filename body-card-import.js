import { BODY_CARD_WORKOUTS, BODY_CARD_SOURCE } from './body-card-data.js';

const MOVEMENTS = {
  'Chair squat': ['chair-squat', 'Lower body', 45],
  'Incline push-up': ['incline-push-up', 'Upper body', 40],
  'Supported dumbbell row': ['supported-dumbbell-row', 'Upper body', 45],
  'Glute bridge': ['glute-bridge', 'Lower body', 45],
  'Dead bug': ['dead-bug', 'Core', 45],
  'Hip hinge': ['hip-hinge', 'Lower body', 45],
  'Low step-up': ['low-step-up', 'Lower body', 45],
  'Band row': ['band-row', 'Upper body', 45],
  'Light shoulder press': ['light-shoulder-press', 'Upper body', 45],
  'Bird dog': ['bird-dog', 'Core', 45],
  'Calf raise': ['calf-raise', 'Lower body', 45],
  'Standing balance': ['standing-balance', 'Balance', 20],
  'Easy walking': ['easy-walking', 'Cardio', 15 * 60],
  'Gentle shoulder mobility': ['gentle-shoulder-mobility', 'Mobility', 2 * 60],
  'Hip and ankle mobility': ['hip-and-ankle-mobility', 'Mobility', 3 * 60],
  'Optional gentle walk': ['optional-gentle-walk', 'Cardio', 5 * 60],
  'Relaxed mobility': ['relaxed-mobility', 'Mobility', 3 * 60],
};

export function importBodyCardExercises(existing) {
  const exercises = existing.map((exercise) => ({ ...exercise }));
  for (const [workoutId, workout] of Object.entries(BODY_CARD_WORKOUTS)) {
    for (const [name, prescription, cue, equipment] of workout.exercises) {
      const [id, focus, duration] = MOVEMENTS[name];
      let exercise = exercises.find((item) => item.id === id);
      if (!exercise) {
        exercise = { id, name, prescription, cues: [cue], equipment, focus, duration,
          level: 'Beginner', image: '/icons/body-card.svg', guideOnly: true };
        exercises.push(exercise);
      }
      exercise.bodyCard = true;
      exercise.bodyCardRecords ??= [];
      exercise.bodyCardRecords.push({ workoutId, workoutName: workout.name, name, prescription, cue, equipment });
    }
  }
  return exercises;
}

export function bodyCardExercise(exercises, workoutId, index) {
  const workout = BODY_CARD_WORKOUTS[workoutId];
  const [name, prescription, cue, equipment] = workout.exercises[index];
  const exercise = exercises.find((item) => item.id === MOVEMENTS[name][0]);
  return { ...exercise, name, prescription, cues: [cue], equipment,
    bodyCardWorkout: workout.name, bodyCardContext: true };
}

export { BODY_CARD_WORKOUTS, BODY_CARD_SOURCE };
