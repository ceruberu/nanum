import { CREATE_USER, LOG_IN_USER } from '../types/userType';

const initialState = {
  user: null,
  isAuthenticated: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {
        user: action.user,
        isAuthenticated: true
      })
    case LOG_IN_USER:
      return Object.assign({}, state, {
        user: action.user,
        isAuthenticated: true
      })
    default:
      return state
  }
}