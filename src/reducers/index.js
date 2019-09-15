import { combineReducers } from 'redux';
import searchShowReducer from './searchShowReducer';

export default combineReducers({
  searchShow: searchShowReducer
});