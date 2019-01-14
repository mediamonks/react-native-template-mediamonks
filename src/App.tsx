import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import TestComponent from './components/TestComponent';

const { store, persistor } = configureStore();

export default () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <TestComponent />
    </PersistGate>
  </StoreProvider>
);
