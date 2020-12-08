import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from '../../server/routes';
import ScrollToTop from '../components/ScrollToTopOnNav';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
