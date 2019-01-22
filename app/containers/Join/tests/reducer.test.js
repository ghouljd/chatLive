import { fromJS } from 'immutable';
import joinReducer from '../reducer';

describe('joinReducer', () => {
  it('returns the initial state', () => {
    expect(joinReducer(undefined, {})).toEqual(fromJS({}));
  });
});
