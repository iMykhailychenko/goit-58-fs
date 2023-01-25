import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../constants/status.constants';
import { postsInitState } from './posts.init-state';
import { postsAsyncThunk } from './posts.thunk';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitState,
  reducers: {
    // postsLoadingAction: state => {
    //   state.status = STATUS.loading;
    // },
    // postsSuccessAction: (state, { payload }) => {
    //   state.status = STATUS.success;
    //   state.posts = payload;
    // },
    // postsErrorAction: state => {
    //   state.status = STATUS.error;
    // },
  },
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

// export const { postsLoadingAction, postsErrorAction, postsSuccessAction } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
