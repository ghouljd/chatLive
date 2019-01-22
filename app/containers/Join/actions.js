/*
 *
 * Join actions
 *
 */

import { LOGIN } from './constants';

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
