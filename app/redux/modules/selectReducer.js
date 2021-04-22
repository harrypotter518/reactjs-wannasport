import { Record } from 'immutable';
import {
  SELECT_ACTION,
} from '../constants/selectConstants';

export const AuthState = new Record({
offscreenBufferin
});

export default function authReducer(state = new AuthState(), action = {}) {
  switch (action.type) {
    case SELECT_ACITON:
      return {
        ...state,
        option: action.payload
      };

    default:
      return state;
  }
}
