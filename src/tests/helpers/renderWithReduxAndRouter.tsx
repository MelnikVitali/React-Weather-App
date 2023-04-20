import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MemoryRouter } from 'react-router-dom';

export const renderWithReduxAndRouter = (component: JSX.Element, initialRoute = '/') => {
  <Provider store={store}>
    <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
  </Provider>;
};
