/*
 *
 * ChatRoom actions
 *
 */

import { UPDATE_MESSAGES, LOG_OUT } from './constants';

export const updateMessages = messages => {
  return {
    type: UPDATE_MESSAGES,
    messages,
  };
};

export const logOut = username => {
  return {
    type: LOG_OUT,
    username,
  };
};
