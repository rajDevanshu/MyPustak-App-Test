
import {GET_CATEGORY, GET_CATEGORYS, GET_CATEGORYSS} from '../actions/actionTypes';


const initalState = {
  books: [],
  bookss: [],
  getbooks: []
};

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case GET_CATEGORY:
      return {...state, books: action.payload};
    case GET_CATEGORYS:
      return {...state, bookss: action.payloads};
    case GET_CATEGORYSS:
      return {...state, getbooks: action.payloads};
    default:
      return state;
  }
};

/*const reducers = (state = initalState, action) => {
  switch (action.type) {
    case GET_CATEGORYS:
      return {...state, bookss: action.payloads};
    default:
      return state;
  }
};*/
export default reducer;