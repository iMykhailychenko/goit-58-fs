import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsAsyncThunk = createAsyncThunk(
  'posts',
  async (search = '') => {
    console.log(search);

    const { data } = await axios.get('http://70.34.201.18:8080/posts', {
      params: {
        search,
        limit: 4,
      },
    });
    return data;
  },
);

// import {
//   postsLoadingAction,
//   postsErrorAction,
//   postsSuccessAction,
// } from './posts.slice';

// export const postsAsyncThunk = async dispatch => {
//   dispatch(postsLoadingAction());
//   try {
//     const { data } = await axios.get('http://70.34.201.18:8080/posts');
//     dispatch(postsSuccessAction(data));
//   } catch {
//     dispatch(postsErrorAction());
//   }
// };
