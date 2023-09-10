import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import cityWeatherReducer from './slices/weatherCitySlice';
import { cityWeatherAPI } from './services/weather/cityWeatherApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  [cityWeatherAPI.reducerPath]: cityWeatherAPI.reducer,
  citiesWeather: cityWeatherReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cityWeatherAPI.middleware),
    // ? show the devTools only in development
    devTools: process.env.MODE !== 'production',
  });

const store = setupStore();

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
