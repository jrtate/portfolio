export const findPercent = (subsetValue, wholeValue) => (`${(subsetValue / wholeValue) * 100}%`);

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isElementInView = (element) => {
  if (!element) { return false; }
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  return isVisible;
};

export default findPercent;
