import React from "react";
import { connect } from "react-redux";
import { incremented, decremented } from "./actions/counterActions";

import "./App.css";
import Counter from "./components/Counter";
import Plus from "./components/Plus";
import Minus from "./components/Minus";

const App = ({ count, decrement, increment }) =>
  <div className="App">
    <Minus decrement={decrement} />
    <Counter count={count} />
    <Plus increment={increment} />
  </div>;

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch(decremented()),
    increment: () => dispatch(incremented())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
