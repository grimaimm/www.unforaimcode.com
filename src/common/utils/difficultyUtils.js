// src/utils/difficultyUtils.js

/**
 * Determine the difficulty level of a lesson.
 * @param {string} difficulty - The difficulty string from the lesson content.
 * @returns {string} - Returns 'easy', 'medium', or 'hard'.
 */
export const determineDifficultyLevel = (difficulty) => {
  const normalizedDifficulty = difficulty.toLowerCase();

  if (normalizedDifficulty.includes('easy')) {
    return 'easy';
  } else if (normalizedDifficulty.includes('medium')) {
    return 'medium';
  } else if (normalizedDifficulty.includes('hard')) {
    return 'hard';
  } else {
    return 'unknown';
  }
};
