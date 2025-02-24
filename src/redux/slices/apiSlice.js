// src/api/apiSlice.js
import { createApi } from '@reduxjs/toolkit/query/react';
import BaseQuery from '../../hooks/baseQuery';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: BaseQuery,
    endpoints: (builder) => ({
        callApi: builder.mutation({
            query: ({ url, method = 'GET', payload = null, params = null }) => ({
                url,
                method,
                payload,
                params,
            }),
        }),
    }),
});

export const { useCallApiMutation } = apiSlice;
