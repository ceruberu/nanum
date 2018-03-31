import { CREATE_USER, LOG_IN_USER } from '../types/userType';

function createUser(user) {
  return {
    type: CREATE_USER,
    user
  }
}