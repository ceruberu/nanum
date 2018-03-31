import { OPEN_MODAL, CLOSE_MODAL } from '../types/modalType';

const initialState = {
  component: null
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        component: action.modal
      })
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        component: null
      })
    default:
      return state
  }
}