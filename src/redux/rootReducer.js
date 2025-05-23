import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import userReducer from './slices/user/userSlice';
import productReducer from './slices/product/productsSlice';
import orderReducer from './slices/order/ordersSlice';
import {usersApiSlice} from './slices/user/usersApi';
import {productsApiSlice} from './slices/product/productsApi';
import {ordersApiSlice} from './slices/order/ordersApi';

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

const productPersistConfig = {
  key: 'products',
  storage,
  keyPrefix: 'redux-',
};

const orderPersistConfig = {
  key: 'orders',
  storage,
  keyPrefix: 'redux-',
};

const reduxAppReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  products: persistReducer(productPersistConfig, productReducer),
  orders: persistReducer(orderPersistConfig, orderReducer),
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  [ordersApiSlice.reducerPath]: ordersApiSlice.reducer,
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
