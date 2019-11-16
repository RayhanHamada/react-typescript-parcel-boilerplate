import { increment, decrement } from "./counterAction";

export const asyncIncrement = () => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(increment());
    }, 5000);
  };
};

export const asyncDecrement = () => {
    return (dispatch: any) => {
      setTimeout(() => {
        dispatch(decrement());
      }, 5000);
    };
  };