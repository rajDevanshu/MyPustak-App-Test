// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers

import FictionReducer from "./MReducer"

// Redux: Root Reducer
const rootReducer = combineReducers({
  
    FictionReducer:FictionReducer
});

// Exports
export default rootReducer;