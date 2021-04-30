import { Record } from 'immutable';
import {
  SELECT_ACTION,
} from '../constants/sideConstants';

// export const SelectState = new Record({
// offscreenBufferin
// });

export default function selectReducer(state = {}, action = {}) {
  // export default function selectReducer(state = new SelectState(), action = {}) {
  switch (action.type) {
    case SELECT_ACTION:
      console.log('selectReducer');
      return {
        ...state,
        option: action.payload
      };

    default:
      return state;
  }
}
