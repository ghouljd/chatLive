/*
 *
 * Join reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN, LOGOUT } from './constants';

export const initialState = fromJS({
  redirect: false,
});

function joinReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.setIn(['redirect'], true);
    case LOGOUT:
      return state.setIn(['redirect'], false);
    default:
      return state;
  }
}

export default joinReducer;
