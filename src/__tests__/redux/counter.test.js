import {
  INCREMENT_COUNTER_VALUE,
  DECREMENT_COUNTER_VALUE,
  incrementCounterValue,
  decrementCounterValue,
} from '../../store/actions/counterActions';
import reducer, { initialState } from '../../store/reducers/counterReducer';
import { mockStore } from '../../utils/testUtils';

// Create an instance of the mockStore
const store = mockStore(initialState);

/**
 * Before Each Test clear the mock stores actions
 */
beforeEach(() => {
  store.clearActions();
});

/**
 * Counter Initial State
 */
describe('counter reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

/**
 * Counter Actions
 */
it(`increment action ${INCREMENT_COUNTER_VALUE}`, () => {
  // Dispatch the action
  store.dispatch(incrementCounterValue());
  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: INCREMENT_COUNTER_VALUE };
  expect(actions).toEqual([expectedPayload]);
});

it(`decrement action ${DECREMENT_COUNTER_VALUE}`, () => {
  // Dispatch the action
  store.dispatch(decrementCounterValue());
  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: DECREMENT_COUNTER_VALUE };
  expect(actions).toEqual([expectedPayload]);
});

/**
 * Counter Reducers
 */
it(`increment reducer ${INCREMENT_COUNTER_VALUE}`, () => {
  expect(reducer(initialState, incrementCounterValue())).toEqual({
    counterValue: 1,
  });
});

it(`decrement reducer ${DECREMENT_COUNTER_VALUE}`, () => {
  expect(reducer(initialState, decrementCounterValue())).toEqual({
    counterValue: -1,
  });
});
