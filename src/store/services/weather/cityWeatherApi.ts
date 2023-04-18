import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from './config';

// https://api.openweathermap.org/data/2.5

export const cityWeatherAPI = createApi({
  reducerPath: 'cityWeatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: WEATHER_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.query<ICityWeather, string | undefined>({
      query: (name) => ({
        url: `${WEATHER_BASE_URL}/weather?q=${name}&appid=${WEATHER_API_KEY}&units=metric`,
        method: 'GET',
      }),
    }),
    getHourlyForecast: builder.query<ICityWeather, number | undefined>({
      query: (cityId) => ({
        url: `${WEATHER_BASE_URL}/forecast?id=${cityId}&appid=${WEATHER_API_KEY}&units=metric`,
        method: 'GET',
      }),
    }),
    getCity: builder.mutation<ICityWeather, string | undefined>({
      query: (name) => ({
        url: `${WEATHER_BASE_URL}/weather?q=${name}&appid=${WEATHER_API_KEY}&units=metric`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCityMutation, useGetCityWeatherQuery, useGetHourlyForecastQuery } =
  cityWeatherAPI;
