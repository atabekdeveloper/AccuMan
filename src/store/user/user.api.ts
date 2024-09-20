import { SR, TGetParamsChange } from '../index.types';
import { api } from '../index.api';

import { TUserItem } from './user.types';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<SR<TUserItem[]>, TGetParamsChange>({
      query: (params) => ({
        url: '/users/search',
        params: { ...params, limit: 6 },
      }),
      providesTags: ['user'],
      transformResponse: (res: any) => {
        return { ...res, data: res.users };
      },
    }),
    createUser: builder.mutation<TUserItem, TUserItem>({
      query: (body) => ({
        url: '/users/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    editUser: builder.mutation<any, TUserItem>({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    deleteUser: builder.mutation<any, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});
