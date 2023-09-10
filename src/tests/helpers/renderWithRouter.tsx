import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: JSX.Element, initialRoute = '/') => {
  const renderResult = render(
    <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>,
  );

  return { ...renderResult };
};
