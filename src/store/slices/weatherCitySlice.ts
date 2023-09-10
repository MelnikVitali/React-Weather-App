import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICityWeather } from '@/interfaces/ICityWeather';

interface CityWeatherState {
  cities: ICityWeather[];
  savedCitiesNames: string[];
}

const initialState: CityWeatherState = {
  cities: [],
  savedCitiesNames: [],
};

export const cityWeatherSlice = createSlice({
  name: 'cityWeather',
  initialState,
  reducers: {
    getSavedCityNames(state, action: PayloadAction<string[]>) {
      state.savedCitiesNames = action.payload;
    },
    addCity: (state, action: PayloadAction<string>) => {
      if (!state.savedCitiesNames.map((city) => city).includes(action.payload)) {
        state.savedCitiesNames = [action.payload, ...state.savedCitiesNames];
      }
    },
    removeSavedCity: (state, action: PayloadAction<string>) => {
      state.savedCitiesNames = state.savedCitiesNames.filter((city) => city !== action.payload);
    },
  },
});

export const { getSavedCityNames, addCity, removeSavedCity } = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
