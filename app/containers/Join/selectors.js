import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the join state domain
 */

const selectJoinDomain = state => state.get('join', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Join
 */

const makeSelectJoin = () =>
  createSelector(selectJoinDomain, substate => substate.toJS());

export default makeSelectJoin;
export { selectJoinDomain };
