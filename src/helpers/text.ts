export const capitalize = (text: string): string => {
  // Split the string into an array of words
  const wordsArray = text.split(' ');

  // Map over the array and capitalize the first letter of each word
  const capitalizedWordsArray = wordsArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWordsArray.join(' ');

  return capitalizedString;
};

export const temperatureToCelsium = (temp: number): string => {
  return `${Math.floor(temp - 273.15)}°C`;
};

export const getCustomHours = (dt: number) => {
  return `${new Date(dt * 1000).getHours()}:${getCustomMinutes(dt)}`;
};

export const getCustomMinutes = (dt: number) => {
  const min: number = new Date(dt * 1000).getMinutes();
  let res: string;
  if (min == 0) {
    res = '00';
  } else if (min > 0 && min < 10) {
    res = `0${min}`;
  } else res = min.toString();
  return res;
};
