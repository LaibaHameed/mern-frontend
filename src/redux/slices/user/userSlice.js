import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  currentUser: null,
};

const slice = createSlice({
  name: 'users',
  initialState: defaultState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    resetUserState: () => defaultState,
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

// selectors
export const getCurrentUser = (state) => state.user.currentUser;
