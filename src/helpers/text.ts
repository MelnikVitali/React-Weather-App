export const capitalize = (text: string): string => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
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
