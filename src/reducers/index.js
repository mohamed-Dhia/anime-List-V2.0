import { combineReducers } from 'redux';
import searchReducer from './searchBarReducer';

export default combineReducers({
  searchState: searchReducer,
});
