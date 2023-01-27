import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../constants/status.constants';

import { postsInitState } from './posts.init-state';
import { postsAsyncThunk } from './posts.thunk';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitState,
  extraReducers: {
    [postsAsyncThunk.pending]: state => {
      state.status = STATUS.loading;
    },
    [postsAsyncThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.posts = payload;
    },
    [postsAsyncThunk.rejected]: state => {
      state.status = STATUS.error;
    },
  },
});

export const postsReducer = postsSlice.reducer;
