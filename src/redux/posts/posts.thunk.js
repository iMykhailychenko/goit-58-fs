import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsAsyncThunk = createAsyncThunk(
  'posts',
  async (search = '') => {
    console.log(search);

    const { data } = await axios.get('https://goit-fs.netlify.app/api/posts', {
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
//     const { data } = await axios.get('https://goit-fs.netlify.app/api/posts');
//     dispatch(postsSuccessAction(data));
//   } catch {
//     dispatch(postsErrorAction());
//   }
// };
