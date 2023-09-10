import { addToLocalStorage, getLocalStorageCities, removeLocalStorage } from '../localStorage';

describe('localStorageCities', () => {
  it('returns null if the value does not exists', () => {
    const result = getLocalStorageCities();
    expect(result).toEqual(null);
  });

  it('returns data from the localStorage', () => {
    addToLocalStorage('Kiev');
    const result = getLocalStorageCities();
    expect(result).toEqual(['Kiev']);
  });

  it('remove City from localStorage', () => {
    addToLocalStorage('Lviv');
    removeLocalStorage('Kiev');
    const result = getLocalStorageCities();
    expect(result).toEqual(['Lviv']);
  });
});
