import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../constants/api.constants';

export const rtkPostsApi = createApi({
  reducerPath: 'rtk-posts',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    getPosts: builder.query({
      query: params => ({
        url: '/posts',
        params,
      }),

      providesTags: result => {
        return result.data
          ? result.data.map(({ id }) => ({ type: 'Posts', id })).concat([{ type: 'Posts', id: 'LIST' }])
          : [{ type: 'Posts', id: 'LIST' }];
      },
    }),

    deletePost: builder.mutation({
      query: id => ({
        url: '/posts/' + id,
        method: 'DELETE',
      }),

      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = rtkPostsApi;
