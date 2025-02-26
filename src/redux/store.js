import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {rootPersistConfig, rootReducer} from './rootReducer';
import {usersApiSlice} from '@/redux/slices/user/usersApi';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(usersApiSlice.middleware),
});

const persistor = persistStore(store);

const {dispatch} = store;

export {store, persistor, dispatch};
