import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counter.slice';
import { postsReducer } from './posts/posts.slice';
import { rtkPostsApi } from './rtk-posts/rtk-posts.api';
import { usersReducer } from './users/users.slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    counter: counterReducer,

    [rtkPostsApi.reducerPath]: rtkPostsApi.reducer,
  },
  devTools: true,
  middleware: defaultMiddleware => {
    return defaultMiddleware().concat([rtkPostsApi.middleware]);
  },
});
