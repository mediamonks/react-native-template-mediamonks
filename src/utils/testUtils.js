/* eslint-disable import/prefer-default-export */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// create a middleware const that imitates the stores middleware.
const middleware = [thunk];
// Create a mock redux store.
export const mockStore = configureStore(middleware);
