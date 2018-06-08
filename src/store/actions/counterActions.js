import { createAction } from 'redux-actions';

export const INCREMENT_COUNTER_VALUE = 'counterActions/INCREMENT_COUNTER_VALUE';
export const DECREMENT_COUNTER_VALUE = 'counterActions/DECREMENT_COUNTER_VALUE';

export const incrementCounterValue = createAction(INCREMENT_COUNTER_VALUE);
export const decrementCounterValue = createAction(DECREMENT_COUNTER_VALUE);
