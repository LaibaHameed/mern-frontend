import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './features/sliderSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
