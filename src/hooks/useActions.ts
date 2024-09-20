import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as auth } from 'src/store/auth/auth.slice';
import { actions as user } from 'src/store/user/user.slice';

import { bindActionCreators } from '@reduxjs/toolkit';

const rootActions = { ...auth, ...user };

export const useActions = () => {
  const dispatch = useDispatch();
  return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
