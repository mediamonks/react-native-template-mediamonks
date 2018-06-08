import React from 'react';
import TestComponent from '../../components/TestComponent';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { initialState } from '../../store/reducers/counterReducer';
import {
  DECREMENT_COUNTER_VALUE,
  INCREMENT_COUNTER_VALUE,
} from '../../store/actions/counterActions';
import { mockStore } from '../../utils/testUtils';

// Add the initial state to our mock redux store.
const counter = { ...initialState };

/**
 *  Test Component
 */
describe('Test component container', () => {
  let store;
  let container;

  /**
   *  Before each create a reference of the test component with a mock store.
   */
  beforeEach(() => {
    store = mockStore({ counter });
    store.dispatch = jest.fn();
    container = shallow(<TestComponent store={store} />);
  });

  it('Counter: renders correctly', () => {
    const containerJson = renderer.create(container).toJSON();
    expect(containerJson).toMatchSnapshot();
  });
  /**
   * Components initial props
   */
  it('Check mapState and dispatch to props of component', () => {
    expect(container.props()).toEqual(
      expect.objectContaining({
        counterValue: 0,
        incrementCounterValue: expect.any(Function),
        decrementCounterValue: expect.any(Function),
      }),
    );
  });
  /**
   *  Component prop dispatches
   */
  it('Test dispatch of increment action', () => {
    container.props().incrementCounterValue();
    expect(store.dispatch).toHaveBeenCalledWith({ type: INCREMENT_COUNTER_VALUE });
  });
  it('Test dispatch of decrement action', () => {
    container.props().decrementCounterValue();
    expect(store.dispatch).toHaveBeenCalledWith({ type: DECREMENT_COUNTER_VALUE });
  });
});
