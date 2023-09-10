import { Provider } from 'react-redux';
import { setupStore } from '@/store';
import { render } from '@testing-library/react';

const store = setupStore();

export const renderWithRedux = (component: JSX.Element) => {
  const renderResult = render(<Provider store={store}>{component}</Provider>);

  return { ...renderResult };
};
