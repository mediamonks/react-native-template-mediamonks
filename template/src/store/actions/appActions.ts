import { createAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';

export const increment = createAction<number>('INCREMENT');

export const incrementBy =
  (value: number) => (dispatch: Dispatch, getState: RootState<any, any, any>) => {
    dispatch(increment(20));
  };
