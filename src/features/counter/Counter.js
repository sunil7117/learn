import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Coin from "../coin/Coin";
import { decrement, increment } from "./counterSlice";
const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="d-flex">
      <button
        className="btn"
        aria-label="increment"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span>Count: {value}</span>
      <button
        className="btn"
        aria-label="decrement"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <Coin />
    </div>
  );
};

export default Counter;
