/* eslint-disable no-underscore-dangle,dot-notation */
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import * as rootReducer from './rootReducer';
import { StateType } from 'typesafe-actions';
import persist from './persist';

export type RootState = StateType<typeof rootReducer>;
export const middleware = [thunk];

declare var window: any;
const devTools = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = (window[devTools] && window[devTools]({})) || compose;

export default () => {
	const store = composeEnhancers(applyMiddleware(...middleware))(createStore)(persist(rootReducer));
	const persistor = persistStore(store);
	return { store, persistor };
};
