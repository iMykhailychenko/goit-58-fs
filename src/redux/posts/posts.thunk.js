import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { BASE_URL } from '../../constants/api.constants';

export const postsAsyncThunk = createAsyncThunk(
  'posts',
  async (params, thunkAPI) => {
    try {
      // console.log(thunkAPI);
      // thunkAPI.dispatch({ type: 'test' });
      // console.log(thunkAPI.getState());

      // if (true) {
      //   return thunkAPI.fulfillWithValue(null);
      // }

      const { data } = await axios.get(BASE_URL + '/posts', {
        params: { limit: 6, ...params },
      });

      // throw new Error('');
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Opssssss!');
      return thunkAPI.rejectWithValue(error);
    }
  },
);
