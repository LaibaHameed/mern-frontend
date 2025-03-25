import { handleApiResponse } from '@/utils/handleApiResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '@/utils/PATHS';
import { actions as productsActions } from './productsSlice';

export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVER_URL, credentials: 'include' }),
  tagTypes: ['Product', 'ProductById'],
  endpoints: (builder) => ({
    // fetch all products
    getProducts: builder.query({
      query: ({ limit, page, search, sort }) => {
        let url = `${API_ROUTES.product.getProducts}?limit=${limit}&page=${page}`;
        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }
        if (sort) {
          url += `&sort=${sort}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
      providesTags: ['Product'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),

    // get product by Id
    getProductById: builder.query({
      query: (productId) => ({
        url: API_ROUTES.product.single({ productId }),
        method: 'GET',
      }),
      providesTags: ['ProductById'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
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

    // delete Product api
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: API_ROUTES.product.single({ productId }),
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({ queryFulfilled });
      },
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Product', 'ProductById'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),

    //add rating api
    addRating: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.product.ratings.addRating,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ProductById'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({ queryFulfilled });
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddRatingMutation,
} = productsApiSlice;
