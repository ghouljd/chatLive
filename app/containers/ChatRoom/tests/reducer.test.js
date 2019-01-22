import { fromJS } from 'immutable';
import chatRoomReducer from '../reducer';

describe('chatRoomReducer', () => {
  it('returns the initial state', () => {
    expect(chatRoomReducer(undefined, {})).toEqual(fromJS({}));
  });
});
