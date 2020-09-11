import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={ProjectPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
