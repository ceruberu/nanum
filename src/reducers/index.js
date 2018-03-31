import { combineReducers } from 'redux';
import user from './userReducer';
import modal from './modalReducer';

const reducer = combineReducers({
  user,
  modal
});

export default reducer;

