import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { NotFound } from '../../components/NotFound/NotFound';
import { PostsItem } from '../../components/Posts/PostsItem';
import { PostsLoader } from '../../components/Posts/PostsLoader';
import { STATUS } from '../../constants/status.constants';
import { postsAsyncThunk } from '../../redux/posts/posts.thunk';

const PostsListPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.posts.status);
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(postsAsyncThunk());
  }, [dispatch]);

  const [search, setSearch] = useState('');
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(postsAsyncThunk(search));
  };

  // console.log(posts && posts.data);
  // console.log(posts?.data);

  return (
    <>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Type to search..."
        value={search}
        onChange={handleChange}
      />

      <Button onClick={handleSearch} className="btn-primary mb-4">
        Start search
      </Button>

      {/* TODO Show loader */}
      {(status === STATUS.idle || status === STATUS.loading) && <PostsLoader />}

      {/* TODO Not found */}
      {status === STATUS.error && <NotFound />}

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts?.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* TODO Pagination */}
      {posts && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(posts.total_pages)].map((_, index) => {
              const innerPage = index + 1;

              return (
                <button key={index} type="button" className="btn btn-primary">
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

export default PostsListPage;
