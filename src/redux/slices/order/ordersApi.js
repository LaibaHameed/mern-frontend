import { handleApiResponse } from '@/utils/handleApiResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '@/utils/PATHS';

export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const ordersApiSlice = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_SERVER_URL,
    credentials: 'include',
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    //create checkout api
    createPaymentCheckout: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.order.createPaymentCheckout,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),

    //create order api
    createOrder: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.order.createOrder,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),
    // get all products api
    getOrders: builder.query({
      query: ({ limit, page, search }) => {
        let url = `${API_ROUTES.order.getAllOrders}?limit=${limit}&page=${page}`;
        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
      providesTags: ['Order'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),

    // update Order Status
    updateOrderStatus: builder.mutation({
      query: ({ orderId, data }) => ({
        url: API_ROUTES.order.updateOrderStatus({ orderId }),
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Order'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),
  }),
});

export const {
  useCreatePaymentCheckoutMutation,
  useCreateOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation
} = ordersApiSlice;
