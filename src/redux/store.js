import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counter.slice';
import { postsReducer } from './posts/posts.slice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
  },
  devTools: true,
  middleware: defaultMiddleware => {
    return defaultMiddleware();
  },
});
