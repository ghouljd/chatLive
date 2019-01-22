import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chatRoom state domain
 */

const selectChatRoomDomain = state => state.get('chatRoom', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChatRoom
 */

const makeSelectChatRoom = () =>
  createSelector(selectChatRoomDomain, substate => substate.toJS());

export default makeSelectChatRoom;
export { selectChatRoomDomain };
