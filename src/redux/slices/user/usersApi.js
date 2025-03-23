import { handleApiResponse } from '@/utils/handleApiResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginUser } from './userSlice';
import { API_ROUTES } from '@/utils/PATHS';
export const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_SERVER_URL,
    credentials: 'include',
    // prepareHeaders: (headers, {getState}) => {
    //   const token = getState().user.authToken;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    // },
  }),
  tagTypes: ['User', 'Feedbacks'],
  endpoints: (builder) => ({
    //login user api
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: API_ROUTES.auth.login,
        method: 'POST',
        body: { email, password },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { body } = await handleApiResponse({ queryFulfilled });
        if (body)
          dispatch(
            loginUser({
              user: body.user,
              token: body.accessToken,
            })
          );
      },
    }),

    //contact form api
    contactSubmission: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.contact,
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({ queryFulfilled });
      },
    }),

    // fetch all feedbacks
    getFeedbacks: builder.query({
      query: ({ limit, page, search }) => {
        let url = `${API_ROUTES.feedback.all}?limit=${limit}&page=${page}`;
        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
      providesTags: ['Feedbacks'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        handleApiResponse({
          queryFulfilled,
          toastMessage: { error: { show: false }, success: { show: false } },
        });
      },
    }),

    //feedback form api
    feedbackSubmission: builder.mutation({
      query: ({ data }) => ({
        url: API_ROUTES.feedback.createFeedback,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Feedbacks'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        await handleApiResponse({ queryFulfilled });
      },
    }),

  }),
});

export const {
  useLoginUserMutation,
  useContactSubmissionMutation,
  useFeedbackSubmissionMutation,
  useGetFeedbacksQuery,
} = usersApiSlice;
