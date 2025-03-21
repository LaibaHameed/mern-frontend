import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  list: [],
};

const slice = createSlice({
  name: 'orders',
  initialState: defaultState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    resetOrdersState: () => defaultState,
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

// selectors
export const getOrdersList = (state) => state.orders.list;
