import React from "react";
import axios from "axios";
import type { RequestHandler } from "express";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "../../frontend/App";
import type { State } from "../../frontend/redux/reducer";
import reducer from "../../frontend/redux/reducer";

const setResponse = (
  html: string,
  preloadedState: any,
  manifest?: Record<string, string>
) => {
  const mainStyles = manifest ? manifest["main.css"] : "/assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "/assets/app.js";

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
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
          </script>
          <script src="${mainBuild}"></script>
      </body>
      </html>`;
};

export const renderApp: RequestHandler = async (req, res) => {
  const initialState = async (): Promise<State> => {
    try {
      const [projects, info] = await Promise.all([
        axios({
          method: "get",
          url: `${process.env.API_URL}/api/projects`,
        }),
        axios({
          method: "get",
          url: `${process.env.API_URL}/api/info`,
        }),
      ]);

      return { info: info.data.data, projects: projects.data.data };
    } catch (error) {
      console.log(error);
      return {
        error: "There was an error while trying to fetch the data",
      };
    }
  };
  const store = createStore(reducer, await initialState());
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  //@ts-ignore
  res.send(setResponse(html, preloadedState, req.hashManifest));
};
