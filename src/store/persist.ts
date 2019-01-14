import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { ReducersMapObject, Action } from 'redux';

const config = {
  key: 'root',
  storage,
  whitelist: [ 'counter' ],
};

export default (rootReducer: ReducersMapObject<any, Action<any>>) =>
  persistCombineReducers(config, rootReducer);
