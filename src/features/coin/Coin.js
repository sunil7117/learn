import React from "react";
import { useSelector } from "react-redux";

const Coin = () => {
  const value = useSelector((state) => state.counter.value);
  return (
    <div>
      <span>Coin: {value}</span>
    </div>
  );
};

export default Coin;
