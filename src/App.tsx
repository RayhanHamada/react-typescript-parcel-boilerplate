import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterAction";
import { asyncDecrement, asyncIncrement } from "./actions/asyncCounterAction";

const App = (props: any) => {
  return (
    <div className="wrapper-app">
      <h1>{props.count}</h1>
      <span>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.asyncIncrement}>Async Increment</button>
        <button onClick={props.asyncDecrement}>Async Decrement</button>
      </span>
    </div>
  );
};

const mapStateToProps = ({ counterReducer }: any) => {
  return {
    count: counterReducer.count
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    asyncIncrement: () => dispatch(asyncIncrement()),
    asyncDecrement: () => dispatch(asyncDecrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
