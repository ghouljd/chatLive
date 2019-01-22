/**
 *
 * Asynchronously loads the component for Menu
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
