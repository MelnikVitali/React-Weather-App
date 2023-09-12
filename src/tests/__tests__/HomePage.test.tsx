import { act, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '@/pages/HomePage';
import { renderWithProviders } from '@/tests/helpers/renderWithProviders';
import { screen } from '@testing-library/dom';

describe('HomePage', () => {
  test('renders button search and input placeholder', async () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(<HomePage />);

    await waitFor(() => {
      const searchButton = getByText('SEARCH');
      const inputNode = getByPlaceholderText('Search city...');

      expect(
        screen.queryByText('No saved cities. To add the city, you need to find it.'),
      ).toBeInTheDocument();

      expect(searchButton).toBeInTheDocument();
      expect(inputNode).toBeInTheDocument();
    });
  });
  test('tests the default props input search', () => {
    const { getByPlaceholderText } = renderWithProviders(<HomePage />);
    const input = getByPlaceholderText('Search city...');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(''); // the initial value is an empty string
  });

  it('tests the onChange event', () => {
    const { getByPlaceholderText } = renderWithProviders(<HomePage />);
    const input = getByPlaceholderText('Search city...');
    const searchCity = 'Dubai';
    const searchButton = screen.getByRole('button');

    fireEvent.change(input, {
      target: { value: searchCity },
    });

    expect(input).toHaveValue(searchCity); // the state has been updated.

    act(() => {
      fireEvent.click(searchButton);
    });
  });

  it('tests the onclick event for empty value', () => {
    const { getByPlaceholderText } = renderWithProviders(<HomePage />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.queryByText('Please enter a city to search')).toBeInTheDocument();
  });
});
