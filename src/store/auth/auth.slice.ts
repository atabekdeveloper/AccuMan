import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './auth.types';

const initialState: IAuthState = {
  token: localStorage.getItem('token') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, { payload }: PayloadAction<IAuthState>) {
      localStorage.setItem('token', `${(state.token = payload.token)}`);
    },
    signOut(state) {
      localStorage.removeItem('token');
      state.token = '';
    },
  },
});

export const { reducer, actions } = authSlice;
