import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

//I didn't apply redux, but set up a reducer to make it easy to impliment instead of props drilling. Because this was a small project, I felt using redux was unnecessary :)
