import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cityWeatherReducer from './slices/weatherCitySlice';
import { cityWeatherAPI } from './services/weather/cityWeatherApi';

const rootReducer = combineReducers({
  [cityWeatherAPI.reducerPath]: cityWeatherAPI.reducer,
  citiesWeather: cityWeatherReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cityWeatherAPI.middleware),
    // ? show the devTools only in development
    devTools: import.meta.env.MODE !== 'production',
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
