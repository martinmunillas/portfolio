import React from "react";
import express, { Request } from "express";
import { renderToString } from "react-dom/server";
import webpack from "webpack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StaticRouter } from "react-router-dom";
import helmet from "helmet";
import axios from "axios";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import "asset-require-hook";
import "ignore-styles";

import App from "../frontend/App";
import reducer, { State } from "../frontend/redux/reducer";

import getManifest from "./utils/middlewares/getManifest";

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

const { PORT, ENV, API_URL } = process.env;

if (ENV === "development") {
  const webpackConfig = require("../../webpack.config.js");
  console.log("Running on development");
  const compiler = webpack(webpackConfig as webpack.Configuration);
  //@ts-ignore
  app.use(webpackDevMiddleware(compiler, { port: PORT, hot: true }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(getManifest);
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable("x-powered-by");
}

app.post("/sendMessage", (req) => {
  axios({
    method: "post",
    url: `${API_URL}/api/messages`,
    data: req.body,
  });
});

const setResponse = (
  html: string,
  preloadedState: any,
  manifest?: Record<string, string>
) => {
  const mainStyles = manifest ? manifest["main.css"] : "/build/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "/build/app.js";

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

app.get("*", async (req: Request, res) => {
  const initialState = async (): Promise<State> => {
    try {
      const projects = await axios({
        method: "get",
        url: `${API_URL}/api/projects`,
      });

      const info = await axios({
        method: "get",
        url: `${API_URL}/api/info`,
      });

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
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
