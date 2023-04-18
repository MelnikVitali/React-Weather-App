export const temperatureFormat = (temp: number | undefined): string => {
  if (temp) {
    const tempFormatted = Math.round(temp);

    if (tempFormatted > 0) return '+' + tempFormatted + ' °C';

    return tempFormatted + ' °C';
  }

  return '' + ' °C';
};
