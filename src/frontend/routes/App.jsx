import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from '../../server/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
