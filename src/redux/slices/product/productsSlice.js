import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  list: [],
};

const slice = createSlice({
  name: 'products',
  initialState: defaultState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    updateList(state, action) {
      state.list = [...state.list, action.payload];
    },
    resetProductState: () => defaultState,
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

// selectors
export const getProductList = (state) => state.products.list;
