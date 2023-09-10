import { RootState } from './index';

export function getSavedCities(state: RootState) {
  return state.citiesWeather.savedCitiesNames;
}
