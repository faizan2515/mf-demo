import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import withReducer from "host/withReducer";
import counter, { decrement, increment } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default withReducer("counter", counter)(App);
