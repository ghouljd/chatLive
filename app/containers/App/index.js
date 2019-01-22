/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChatRoom from 'containers/ChatRoom/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Join from 'containers/Join/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/Chat" render={props => <ChatRoom {...props} />} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
