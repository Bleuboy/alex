import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../redux';

interface ReduxProviderProps {
  children: ReactNode;
}

const store = configureStore({
  reducer: rootReducer,
});

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
