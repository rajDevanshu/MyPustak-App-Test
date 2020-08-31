import {combineReducers} from 'redux';

import CategoryReducer from './CategoryReducers';

const rootReducer = combineReducers({
  CategoryReducer: CategoryReducer,
});

export default rootReducer;