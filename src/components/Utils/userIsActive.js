export const userIsActive = (dataIsActive, colorPrimary, colorSecondary) => {
  if (dataIsActive) {
    return colorPrimary;
  }
  return colorSecondary;
};
