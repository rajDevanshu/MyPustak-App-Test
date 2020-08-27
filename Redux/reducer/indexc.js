// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers

import reducer from "./counterReducer"

// Redux: Root Reducer
const rootReducer = combineReducers({
  
    reducer:reducer
});

// Exports
export default rootReducer;