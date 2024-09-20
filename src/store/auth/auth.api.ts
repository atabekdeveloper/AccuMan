import { TAuthLogin, IAuthLoginGet, IAuthUserItem } from './auth.types';

import { api } from '../index.api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    authProfile: builder.query<IAuthUserItem, void>({
      query: () => '/auth/me',
      providesTags: ['auth'],
    }),
    authLogin: builder.mutation<IAuthLoginGet, TAuthLogin>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});
