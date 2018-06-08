/* eslint-disable no-underscore-dangle,dot-notation */
import { compose, createStore, applyMiddleware } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const config = {
  key: 'root',
  storage,
  // whitelist:[]
  blacklist: ['counter'],
};

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})) ||
  compose;

const reducer = persistCombineReducers(config, reducers);

export const middleware = [thunk];

export default () => {
  const store = composeEnhancers(applyMiddleware(...middleware))(createStore)(reducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
