import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import useScrollToTop from "./components/useScrollToTop";
import { extendTheme, QuaantumProvider, theme } from "@quaantum/components";

const myTheme = extendTheme(theme, {
  font: `'Montserrat', sans-serif`,
  components: {
    Input: {
      base: {
        padding: "20px",
        borderRadius: "20px",
        height: "40px",
        border: "none",
      },
      defaultVariant: "",
      variants: {},
    },
    TextArea: {
      base: {
        padding: "20px",
        borderRadius: "20px 20px 0 20px",
        height: "100%",
        border: "none",
      },
      defaultVariant: "",
      variants: {},
    },
  },
});

const App: React.FC = () => {
  useScrollToTop();
  return (
    <QuaantumProvider theme={myTheme}>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </QuaantumProvider>
  );
};

export default App;
