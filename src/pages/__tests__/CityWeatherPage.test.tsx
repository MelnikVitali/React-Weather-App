import { waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { dummyCityWeather } from '@/tests/dummyCityWeather';
import { renderWithProviders } from '@/tests/helpers/renderWithProviders';
import { server } from '@/jestSetup';
import CityWeatherPage from '@/pages/CityWeatherPage';

describe('App', () => {
  test('renders Current Temp and Feels like', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/forecast', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(dummyCityWeather));
      }),
    );

    const { getByText } = renderWithProviders(<CityWeatherPage />);

    await waitFor(() => {
      const rgxName = new RegExp(dummyCityWeather.name, 'i');
      const rgxCountry = new RegExp(dummyCityWeather.sys.country, 'i');
      expect(getByText(rgxName)).toBeInTheDocument();
      expect(getByText(rgxCountry)).toBeInTheDocument();
    });
  });
});
