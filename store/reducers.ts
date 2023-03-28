import { INCREMENT } from "./actionTypes";

const INITIAL_STATE = {
  counter: 0,
};

//FIXME: Any is not a propper type for action
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export default reducer;
