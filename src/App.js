import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(100))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter}
      {isLogged ? <h3>need to be logged to see</h3> : ""}
    </div>
  );
}

export default App;
