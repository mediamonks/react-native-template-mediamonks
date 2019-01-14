import * as actions from './action';
import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

export type CounterAction = ActionType<typeof actions>;

export type CounterState = Readonly<{
	counter: number;
	anotherCounter: number;
}>;

const counterReducer = combineReducers<CounterState, CounterAction>({
	counter: (state = 0, { type }) => {
		if (type === getType(actions.increment)) return state + 1;
		if (type === getType(actions.decrement)) return state - 1;

		return state;
	},
	anotherCounter: (state = 0, { type }) => {
		if (type === getType(actions.increment)) return state + 2;
		if (type === getType(actions.decrement)) return state - 2;

		return state;
	}
});

export type CounterReducer = typeof counterReducer;

export { counterReducer };
