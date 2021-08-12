import { combineReducers } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default (state: RootState, action: AnyAction) => {
  if (action.type === 'CLEAR_STORE') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};
