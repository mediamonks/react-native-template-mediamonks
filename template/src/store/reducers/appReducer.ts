import { createSlice } from '@reduxjs/toolkit';
import { increment } from '../actions/appActions';

interface appState {
  value: number;
}

const initialState: appState = {
  value: 0,
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    [increment.type]: (state, { payload }) => {
      state.value = payload;
    },
  },
});

console.log('What are the actions', actions);
export default reducer;
