import axios from 'axios';

import { BASE_URL } from '../constants/api.constants';

const postsApi = axios.create({
  baseURL: BASE_URL,
});

export const getPosts = async (params = {}) => {
  const { data } = await postsApi.get('/posts', {
    params: {
      limit: 6,
      ...params,
    },
  });

  return data;
};
