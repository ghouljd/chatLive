/*
 *
 * ChatRoom reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_MESSAGES, LOG_OUT } from './constants';
import { firestore } from 'firebaseConfig';

export const initialState = fromJS({
  redirect: false,
  messages: [],
});

function chatRoomReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      const messages = [...state.get('messages')];
      action.messages.forEach(change => {
        if (change.type === 'added') messages.push(change.doc.data());
      });
      return state.setIn(['messages'], messages);
    case LOG_OUT:
      console.log('LOG_OUT', action.username);
      firestore
        .collection('users')
        .doc(action.username)
        .set(
          {
            active: false,
          },
          { merge: true },
        );
      return state.setIn(['redirect'], true);
    default:
      return state;
  }
}

export default chatRoomReducer;
