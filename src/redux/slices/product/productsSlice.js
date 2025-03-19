import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  list: [],
  cartItems: [],
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
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteFromCart(state, action) {
      const filteredProducts = state.cartItems.filter(
        (product) => product._id !== action.payload
      );
      state.cartItems = filteredProducts;
    },
    increaseQuantity(state, action) {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    resetProductState: () => defaultState,
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;

// selectors
export const getProductList = (state) => state.products.list;
export const getCartItems = (state) => state.products.cartItems;
