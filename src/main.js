import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';
import TestComponent from './components/TestComponent';

const { store, persistor } = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <TestComponent />
        </PersistGate>
      </Provider>
    );
  }
}
