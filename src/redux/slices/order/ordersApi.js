import {handleApiResponse} from '@/utils/handleApiResponse';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_ROUTES} from '@/utils/PATHS';

export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const ordersApiSlice = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER_URL, credentials: 'include'}),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    //create order api
    createOrder: builder.mutation({
      query: ({data}) => ({
        url: API_ROUTES.order.createPaymentCheckout,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, {queryFulfilled}) => {
        await handleApiResponse({queryFulfilled});
      },
    }),
  }),
});

export const {useCreateOrderMutation} = ordersApiSlice;
