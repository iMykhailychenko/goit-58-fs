import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { NotFound } from '../../components/NotFound/NotFound';
import { PostsItem } from '../../components/Posts/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader';
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from '../../redux/rtk-posts/rtk-posts.api';

const RTKPostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const search = searchParams.get('search') || '';

  const { data, isLoading, isError } = useGetPostsQuery({ page, search });
  const [trigger] = useDeletePostMutation();

  const [searchPosts, setSearchPosts] = useState(search);
  const handleChange = event => {
    setSearchPosts(event.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ search: searchPosts, page: 1 });
  };

  const handleChangePage = newPage => {
    setSearchParams({ page: newPage, search });
  };

  const handleDelete = id => {
    trigger(id);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Type to search..."
        value={searchPosts}
        onChange={handleChange}
      />
      <Button onClick={handleSearch} className="btn-primary mb-4">
        Start search
      </Button>

      {isLoading && <PostsLoader />}

      {isError && <NotFound />}

      {data && (
        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {data.data.map(post => (
              <PostsItem key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}

      {data && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(data.total_pages)].map((_, index) => {
              const innerPage = index + 1;

              return (
                <button
                  key={index}
                  type="button"
                  className="btn btn-primary"
                  disabled={innerPage === Number(page)}
                  onClick={() => handleChangePage(innerPage)}
                >
                  {innerPage}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RTKPostsListPage;
