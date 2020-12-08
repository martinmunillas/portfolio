import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import { Provider } from 'react-redux';
import { createStore, getState } from 'redux';
import { StaticRouter, Route } from 'react-router-dom';
import helmet from 'helmet';
import axios from 'axios';

//frontend
import reducer from '../frontend/redux/reducer';

//utils
import mockState from './utils/mock/yourdata';

//routes
import routes from './routes';

//middlewares
import getManifest from './utils/middlewares/getManifest';

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const { PORT, ENV, API_URL } = process.env;

if (ENV === 'development') {
  console.log('Running on development');
  const webpackConfig = require('../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(getManifest);
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/build/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/build/app.js';

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="icon" href="https://lh3.google.com/u/0/d/1tLgNGHAbtA_Ev9gjGRaMIcjmXXb_VFnH=w1920-h902-iv3">
        <link rel="stylesheet" type="text/css" href="${mainStyles}">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>martinmunilla.</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${mainBuild}"></script>
    </body>
    </html>`;
};

const renderApp = async (req, res) => {
  const initialState = async () => {
    try {
      const projects = await axios({
        method: 'get',
        url: `${API_URL}/api/projects`,
      });

      const info = await axios({
        method: 'get',
        url: `${API_URL}/api/info`,
      });

      return { info: info.data.data, projects: projects.data.data };
    } catch (error) {
      return {};
    }
  };
  const store = createStore(reducer, await initialState());
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {routes.map((route, i) => (
          <Route {...route} key={route.path || i} />
        ))}
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/sendMessage', (req, res) => {
  axios({
    method: 'post',
    url: `${API_URL}/api/messages`,
    data: req.body,
  });
});

app.get('*', (req, res, next) => {
  renderApp(req, res);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
