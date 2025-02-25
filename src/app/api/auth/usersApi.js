import { handleApiResponse } from '@/utils/handleApiResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actions as usersActions } from '@/redux/slices/user/userSlice';
export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL

export const usersApiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_SERVER_URL, credentials: 'include' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: { email, password },
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                const { body } = await handleApiResponse({ dispatch, queryFulfilled });
                if (body) dispatch(usersActions.setCurrentUser(body.user));
            },
        }),

    }),
});

export const {
    useLoginUserMutation,
} = usersApiSlice;