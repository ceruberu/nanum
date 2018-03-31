import { OPEN_MODAL, CLOSE_MODAL } from '../types/modalType';

export function openModal(modal) {
  return {
    type: OPEN_MODAL,
    modal
  }
}

export function closeModal() {
  console.log("CLOSE");
  return {
    type: CLOSE_MODAL,
    modal: false
  }
}