import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '@/store';
import { render } from '@testing-library/react';

const store = setupStore();

export const renderWithReduxAndRouter = (component: JSX.Element, initialRoute = '/') => {
  const renderResult = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
    </Provider>,
  );

  return { ...renderResult };
};
