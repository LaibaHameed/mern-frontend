import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  currentUser: null,
  authToken: null,
};

const slice = createSlice({
  name: 'users',
  initialState: defaultState,
  reducers: {
    setLoginCredentials(state, action) {
      const {user, token} = action.payload;
      state.currentUser = user;
      state.authToken = token;
    },
    resetLoginCredentials(state) {
      state.currentUser = null;
      state.authToken = null;
    },
    resetUserState: () => defaultState,
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

// selectors
export const getCurrentUser = (state) => state.user.currentUser;

export const loginUser =
  ({user, token}) =>
  (dispatch) => {
    dispatch(actions.setLoginCredentials({user, token}));
  };

export const logoutUser = () => (dispatch) => {
  dispatch(actions.resetLoginCredentials());
};
