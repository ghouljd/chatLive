/**
 *
 * Asynchronously loads the component for Message
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
