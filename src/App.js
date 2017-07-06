import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement } from "./actions/counterActions";

import Wrapper from "./components/styled/Wrapper";
import Counter from "./components/Counter";
import Plus from "./components/Plus";
import Minus from "./components/Minus";

const App = ({ count, decrement, increment }) =>
  <Wrapper>
    <Minus decrement={decrement} />
    <Counter count={count} />
    <Plus increment={increment} />
  </Wrapper>;

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ decrement, increment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// For Testing, export unconnected Component
export { App };
