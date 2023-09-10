import { waitFor } from '@testing-library/react';
import HomePage from '@/pages/HomePage';
import { renderWithProviders } from '@/tests/helpers/renderWithProviders';

describe('HomePage', () => {
  test('renders button search and input placeholder', async () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(<HomePage />);

    await waitFor(() => {
      const searchButton = getByText('SEARCH');
      const inputNode = getByPlaceholderText('Search city...');

      expect(searchButton).toBeInTheDocument();
      expect(inputNode).toBeInTheDocument();
    });
  });
});
