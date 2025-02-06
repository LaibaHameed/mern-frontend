import { createSlice } from '@reduxjs/toolkit';
import SLIDES from '@/constants/general';
import { CUSTOMER_REVIEWS } from '@/constants/general';

const initialState = {
  currentSlide: 0,
  slides: SLIDES,
  customerReviewSlide: 0,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    // Carousel Slide Controls
    nextSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % state.slides.length;
    },
    prevSlide: (state) => {
      state.currentSlide =
        state.currentSlide === 0 ? state.slides.length - 1 : state.currentSlide - 1;
    },
    goToSlide: (state, action) => {
      state.currentSlide = action.payload;
    },

    // Customer Review Slide Controls
    nextReviewSlide: (state) => {
      state.customerReviewSlide = (state.customerReviewSlide + 1) % CUSTOMER_REVIEWS.length;
    },
    prevReviewSlide: (state) => {
      state.customerReviewSlide =
        state.customerReviewSlide === 0 ? CUSTOMER_REVIEWS.length - 1 : state.customerReviewSlide - 1;
    },
    goToReviewSlide: (state, action) => {
      state.customerReviewSlide = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, goToSlide, nextReviewSlide, prevReviewSlide, goToReviewSlide } =
  sliderSlice.actions;
export default sliderSlice.reducer;
