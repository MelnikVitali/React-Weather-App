import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store';

const store = setupStore();

type StoreProviderProps = {
  children?: React.ReactNode;
};

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
