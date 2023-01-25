import { configureStore, createReducer } from '@reduxjs/toolkit';
import { postsReducer } from './posts/posts.slice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  devTools: true,
  middleware: defaultMiddleware => {
    return defaultMiddleware();
  },
});

// const counter = createReducer(0, () => ({
//   test: state => {
//     return state + 1;
//   },
// }));

// const testMiddleware = (a, b, c) => {
//   // a + b + c
// };

// testMiddleware(1,2,3)

// const testMiddleware = a => {
//   return b => {
//     return c => {
//       // a + b + c
//     };
//   };
// };

// const func1 = testMiddleware(1);

// /// ...
// const func2 = func1(2);

// /// ...
// func2(3);

// const testMiddleware = store => {
//   console.log(store);

//   return next => {
//     console.log(next);

//     return action => {
//       console.log(action);

//       if (action.type === 'test') {
//         store.dispatch({ type: 'test2', payload: 100 });
//         return;
//       }

//       next(action);
//     };
//   };
// };

// export const getPostsAction = async dispatch => {
//   dispatch({ type: 'LOADING' });
//   try {
//     const url = 'http://70.34.201.18:8080/posts?limit=10&page=1';
//     const responce = await fetch(url);
//     const data = await responce.json();

//     dispatch({ type: 'SUCCESS', payload: data });
//   } catch {
//     dispatch({ type: 'ERROR' });
//   }
// };

// const myAsyncThunk = store => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         action(store.dispatch);
//         return;
//       }

//       next(action);
//     };
//   };
// };
