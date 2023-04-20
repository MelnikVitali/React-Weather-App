import { Provider } from 'react-redux';
import { store } from '../../store/store';

export const renderWithRedux = (component: JSX.Element) => {
  <Provider store={store}>{component}</Provider>;
};
