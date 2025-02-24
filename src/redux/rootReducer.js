import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import userReducer from './slices/user/userSlice';
import authReducer from "./slices/authSlice"; 
import { apiSlice } from '@/redux/slices/apiSlice';
// import {clearStore} from './utils';

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const userPersistConfig = {
  key: 'user',
  storage,
  keyPrefix: 'redux-',
};

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'redux-',
};

const reduxAppReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  auth : persistReducer(authPersistConfig, authReducer),
  [apiSlice.reducerPath] : apiSlice.reducer
});

const rootReducer = (state, action) => {
  //   if (action.type === clearStore.type) {
  //     storage.removeItem('persist:root');
  //     storage.removeItem('persist:user');
  //     localStorage.clear();
  //     return reduxAppReducer(undefined, action);
  //   }

  return reduxAppReducer(state, action);
};

export {rootPersistConfig, rootReducer};
