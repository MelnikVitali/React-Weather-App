import { FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { WEATHER_API_KEY, WEATHER_BASE_URL } from './config';
import { IHourlyForecast } from '../../../interfaces/IHourlyForecast';
import { DateTime } from 'luxon';

// https://api.openweathermap.org/data/2.5

export const cityWeatherAPI = createApi({
  reducerPath: 'cityWeatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: WEATHER_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.query<ICityWeather, string | undefined>({
      async queryFn(name, _queryApi, _extraOptions, fetchWithBQ) {
        //get cityWeather
        const cityWeather = await fetchWithBQ(
          `${WEATHER_BASE_URL}/weather?q=${name}&appid=${WEATHER_API_KEY}&units=metric`,
        );

        if (cityWeather.error) return { error: cityWeather.error as FetchBaseQueryError };

        const updatedDate = DateTime.now().toFormat('HH:mm:ss');

        return { data: { ...(cityWeather.data as ICityWeather), updatedDate } };
      },
    }),
    getHourlyForecast: builder.query<IHourlyForecast, string | undefined>({
      async queryFn(name, _queryApi, _extraOptions, fetchWithBQ) {
        //get cityWeather
        const cityWeather = await fetchWithBQ(
          `${WEATHER_BASE_URL}/weather?q=${name}&appid=${WEATHER_API_KEY}&units=metric`,
        );

        if (cityWeather.error) return { error: cityWeather.error as FetchBaseQueryError };
        const cityData = cityWeather?.data as ICityWeather;
        //get hourlyForecast
        const hourlyForecast = await fetchWithBQ(
          `${WEATHER_BASE_URL}/forecast?id=${cityData.id}&appid=${WEATHER_API_KEY}&units=metric`,
        );

        const updatedDate = DateTime.now().toFormat('MMMM dd, HH:mm:ss');

        return hourlyForecast.data
          ? {
              data: {
                ...(cityData as ICityWeather),
                ...(hourlyForecast.data as IHourlyForecast),
                updatedDate,
              },
            }
          : { error: hourlyForecast.error as FetchBaseQueryError };
      },
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
