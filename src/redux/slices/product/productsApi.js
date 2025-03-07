import { handleApiResponse } from '@/utils/handleApiResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '@/utils/PATHS';
import { actions as productsActions } from './productsSlice';

export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVER_URL, credentials: 'include' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    // fetch all products 
    getProducts: builder.query({
      query: ({ limit, page }) => ({
        url: `${API_ROUTES.product.getProducts}?limit=${limit}&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Product'], // Caching
      onQueryStarted: async ({ limit, page }, { dispatch, queryFulfilled }) => {
        const { body } = await handleApiResponse({ queryFulfilled });
        if (body) dispatch(productsActions.setList(body.products));
      },
    }),

    //add product api
    addProduct: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.product.addProduct,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { body } = await handleApiResponse({ queryFulfilled });
        if (body) dispatch(productsActions.updateList(body.product));
      },
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApiSlice;
