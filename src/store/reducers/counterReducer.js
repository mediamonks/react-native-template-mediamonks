import { handleActions } from 'redux-actions';
import { incrementCounterValue, decrementCounterValue } from '../actions/counterActions';

export const initialState = {
  counterValue: 0,
};

export default handleActions(
  {
    [incrementCounterValue]: state => ({
      ...state,
      counterValue: state.counterValue + 1,
    }),
    [decrementCounterValue]: state => ({
      ...state,
      counterValue: state.counterValue - 1,
    }),
  },
  initialState,
);
