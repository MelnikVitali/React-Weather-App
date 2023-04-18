export const getLocalStorageCities = (): Array<string> | null => {
  const data = localStorage.getItem('savedCities');
  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export const addToLocalStorage = (name: string) => {
  if (localStorage.getItem('savedCities') === null) {
    localStorage.setItem('savedCities', JSON.stringify([name]));
  } else {
    const temp = JSON.parse(localStorage.savedCities);

    if (!temp.includes(name)) {
      localStorage.setItem('savedCities', JSON.stringify([name, ...temp]));
    }
  }
};

export const removeLocalStorage = (name: string) => {
  const temp = JSON.parse(localStorage.savedCities).filter((cityName: string) => cityName !== name);

  localStorage.setItem('savedCities', JSON.stringify(temp));
};
