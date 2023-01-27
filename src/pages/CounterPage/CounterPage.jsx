import { useDispatch, useSelector } from 'react-redux';

import {
  decrementAction,
  incrementAction,
} from '../../redux/counter/counter.slice';

const CounterPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleMinus = () => {
    dispatch(decrementAction());
  };

  const handlePlus = () => {
    dispatch(incrementAction());
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3 box">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          onClick={handleMinus}
          className="btn p-3 btn-outline-light w-25 mx-2"
          type="button"
        >
          -
        </button>

        <button
          onClick={handlePlus}
          className="btn p-3 btn-outline-light w-25 mx-2"
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
