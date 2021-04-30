import * as types from '../constants/sideConstants';

export const selectAction = value => ({
  type: types.SELECT_ACTION,
  payload: value
});
