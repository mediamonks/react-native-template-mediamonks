import { createAction } from 'typesafe-actions';
import { CounterActionType } from './enum';

export const increment = createAction(CounterActionType.INCREMENT);
export const decrement = createAction(CounterActionType.DECREMENT);
