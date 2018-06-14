import { handleActions } from 'redux-actions';
import { INCREMENT_COUNTER_VALUE, DECREMENT_COUNTER_VALUE } from '../actions/counterActions';

export const initialState = {
  counterValue: 0,
};

export default handleActions(
  {
    [INCREMENT_COUNTER_VALUE]: state => ({
      ...state,
      counterValue: state.counterValue + 1,
    }),
    [DECREMENT_COUNTER_VALUE]: state => ({
      ...state,
      counterValue: state.counterValue - 1,
    }),
  },
  initialState,
);
