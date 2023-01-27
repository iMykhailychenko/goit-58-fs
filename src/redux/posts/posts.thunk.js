import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../constants/api.constants';

export const postsAsyncThunk = createAsyncThunk(
  'posts',
  async (search = '') => {
    const { data } = await axios.get(BASE_URL + '/posts', {
      params: { search, limit: 6 },
    });
    return data;
  },
);
