import { DECREMENT, INCREMENT } from "./../actions/actionTypes";

const initialState = {
  count: 1
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
};
