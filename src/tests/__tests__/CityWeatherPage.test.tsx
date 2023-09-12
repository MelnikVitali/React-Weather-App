import { screen, waitFor } from '@testing-library/react';
import { DateTime } from 'luxon';
import { rest } from 'msw';
import { dummyCityWeather } from '@/tests/mocks/dummyCityWeather';
import { renderWithProviders } from '@/tests/helpers/renderWithProviders';
import { server } from '@/tests/jestSetup';
import CityWeatherPage from '@/pages/CityWeatherPage';
import { dummyHourlyForecast } from '@/tests/mocks/dummyHourlyForecast';
import { temperatureFormat } from '@/helpers/temperatureFormat';

describe('CityWeatherPage', () => {
  test('renders Current Temp, Feels like from CityWeather and firs temp from HourlyForecast', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/forecast', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ ...dummyCityWeather, ...dummyHourlyForecast }));
      }),
    );

    const { getByText } = renderWithProviders(<CityWeatherPage />);

    await waitFor(() => {
      const rgxName = new RegExp(dummyCityWeather.name, 'i');
      const currentTemp = temperatureFormat(dummyCityWeather?.main?.temp);
      const feelsLikeTemp = `Feels like: ${temperatureFormat(dummyCityWeather?.main?.feels_like)}`;
      const secondCardHourlyForecastTime = DateTime.fromFormat(
        dummyHourlyForecast.list[1].dt_txt,
        'yyyy-MM-dd HH:mm:ss',
      ).toFormat('HH:mm');

      expect(getByText(rgxName)).toBeInTheDocument();
      expect(getByText(currentTemp)).toBeInTheDocument();
      expect(getByText(feelsLikeTemp)).toBeInTheDocument();
      expect(getByText(secondCardHourlyForecastTime)).toBeInTheDocument();
    });
  });
});
