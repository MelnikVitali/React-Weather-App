import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: JSX.Element, initialRoute = '/') => {
  return <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>;
};
