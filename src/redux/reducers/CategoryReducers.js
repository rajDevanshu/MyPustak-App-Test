
import {GET_CATEGORY} from '../actions/actionTypes';


const initalState = {
  books: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {...state, books: action.payload};
    default:
      return state;
  }
};
export default reducer;