import { authApi } from './auth/auth.api';
import { usersApi } from './user/user.api';

export const { useAuthProfileQuery, useAuthLoginMutation } = authApi;
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = usersApi;
