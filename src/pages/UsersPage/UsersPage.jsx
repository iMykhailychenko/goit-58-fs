import { useDispatch, useSelector } from 'react-redux';

import { Banner } from '../../components/Banner/Banner';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { NotFound } from '../../components/NotFound/NotFound';
import { confetti } from '../../helpers/Confetti/Confetti';
import {
  selectFilteredUsers,
  selectIsModalOpen,
  selectTototalOpenToWork,
  selectUserSearch,
} from '../../redux/users/users.selectors';
import {
  userSearchAction,
  userDeleteAction,
  toggleModalOpen,
} from '../../redux/users/users.slice';

import { UsersItem } from './UsersItem';

const UsersPage = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsModalOpen);
  const search = useSelector(selectUserSearch);
  const users = useSelector(selectFilteredUsers);
  const totalOpenToWork = useSelector(selectTototalOpenToWork);

  const handleSearch = event => {
    dispatch(userSearchAction(event.target.value));
  };

  const handleDelete = id => {
    confetti.run();
    dispatch(userDeleteAction(id));
  };

  const handleToggle = () => {
    dispatch(toggleModalOpen());
  };

  return (
    <>
      <Button className="btn-primary mb-4" onClick={handleToggle}>
        Open modal
      </Button>
      {isOpen && (
        <Modal onClose={handleToggle}>
          <Banner />
        </Modal>
      )}

      <div className="input-group mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          className="form-control"
          placeholder="Search user by name..."
        />
      </div>

      <p>Totla Open to Work: {totalOpenToWork}</p>

      <div className="mb-5">
        {users.length ? (
          users.map(user => (
            <UsersItem key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default UsersPage;

// const cache = {};

// const sum = (a, b) => {
//   console.log('sum');
//   return a + b;
// };

// const memoSum = (a, b) => {
//   const params = JSON.stringify([a, b]);

//   if (cache[params]) {
//     return cache[params];
//   }

//   const result = sum(a, b);
//   cache[params] = result;

//   return result;
// };

// memoSum(1, 2); // 3
// memoSum(2, 2); // 4
// memoSum(1, 2); // 3 from cache
