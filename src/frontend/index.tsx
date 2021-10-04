import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reducer from "./redux/reducer";

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(
  reducer,
  preloadedState,
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
