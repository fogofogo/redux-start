import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import Reducers from './reducers'
import { Provider } from 'react-redux'

//ACTION increment - what you want to do
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};


//GLOBAL store
let store = createStore(Reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
