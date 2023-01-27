import { createSlice } from '@reduxjs/toolkit';

import { usersInitState } from './users.init-state';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitState,
  reducers: {
    userSearchAction: (state, { payload }) => {
      state.search = payload;
    },
    userDeleteAction: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
    toggleModalOpen: state => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { userSearchAction, userDeleteAction, toggleModalOpen } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
