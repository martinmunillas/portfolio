import express from "express";
import webpack from "webpack";
import helmet from "helmet";
import axios from "axios";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import getManifest from "./middlewares/getManifest";
import { renderApp } from "./middlewares/renderApp";

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

app.get("*", renderApp);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
