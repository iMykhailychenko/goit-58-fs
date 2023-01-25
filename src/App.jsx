import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

const NewPostPage = lazy(() => import('./pages/NewPostPage/NewPostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const CommentsPage = lazy(() =>
  import('./pages/SinglePostPage/CommentsPage/CommentsPage'),
);
const SinglePostPage = lazy(() =>
  import('./pages/SinglePostPage/SinglePostPage'),
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PostsListPage = lazy(() => import('./pages/PostsListPage/PostsListPage'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-58-fs">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="/posts" element={<PostsListPage />} />

            <Route path="/posts/:postId" element={<SinglePostPage />}>
              <Route path="comments" element={<CommentsPage />} />
            </Route>

            <Route path="/new-post" element={<NewPostPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
