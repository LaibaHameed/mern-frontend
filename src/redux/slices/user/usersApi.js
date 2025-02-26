import {handleApiResponse} from '@/utils/handleApiResponse';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {loginUser} from './userSlice';
import {API_ROUTES} from '@/utils/PATHS';
export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER_URL, credentials: 'include'}),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    //login user api
    loginUser: builder.mutation({
      query: ({email, password}) => ({
        url: API_ROUTES.auth.login,
        method: 'POST',
        body: {email, password},
      }),
      onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
        const {body} = await handleApiResponse({dispatch, queryFulfilled});
        if (body)
          dispatch(
            loginUser({
              user: body.user,
              token: body.accessToken,
            })
          );
      },
    }),
  }),
});

export const {useLoginUserMutation} = usersApiSlice;
