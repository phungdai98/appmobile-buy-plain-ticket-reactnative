import { combineReducers } from 'redux';
import clientReducer from './../reducers/lists-plain';
const appReducers = combineReducers({
  clientReducer,
});
export default appReducers;
