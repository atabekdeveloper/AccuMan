import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserState, TUserItem } from './user.types';

const initialState: IUserState = {
  modalShow: false,
  paramsForm: null,
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleModal(state, { payload }: PayloadAction<boolean>) {
      state.modalShow = payload;
    },
    setParamsForm(state, { payload }: PayloadAction<TUserItem | null>) {
      state.paramsForm = payload;
    },
  },
});
export const { reducer, actions } = userSlice;
