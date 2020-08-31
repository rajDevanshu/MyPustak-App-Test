import {combineReducers} from 'redux';

import CategoryReducer from './CategoryReducer';
//import reducers from './CategoryReducer';

const rootReducer = combineReducers({
  CategoryReducer: CategoryReducer,
  
  
});

export default rootReducer;