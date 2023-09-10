import { waitFor } from '@testing-library/react';
import { dummyCityWeather } from '@/tests/dummyCityWeather';
import CityCard from '@/components/CityCard';
import { renderWithProviders } from '@/tests/helpers/renderWithProviders';

describe('CityCard', () => {
  test('CityCard should display CityName and CityCountry with proper source', async () => {
    const { getByText } = renderWithProviders(<CityCard cityName='Lviv' />);

    await waitFor(() => {
      const rgxName = new RegExp(dummyCityWeather.name, 'i');
      const rgxAlt = new RegExp(dummyCityWeather.sys.country, 'i');

      expect(getByText(rgxName)).toBeInTheDocument();
      expect(getByText(rgxAlt)).toBeInTheDocument();
    });
  });
});
