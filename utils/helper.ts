export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};
