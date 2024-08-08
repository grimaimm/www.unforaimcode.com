export const getPathColor = (score) => {
  if (score <= 50) return 'rgba(255, 51, 51, 1)';
  if (score <= 89) return 'rgba(255, 170, 51, 1)';
  return 'rgba(0, 204, 102, 1)';
};

export const getBackgroundColor = (score) => {
  if (score <= 50) return 'rgba(255, 51, 51, 0.1)';
  if (score <= 89) return 'rgba(255, 170, 51, 0.1)';
  return 'rgba(0, 204, 102, 0.1)';
};
