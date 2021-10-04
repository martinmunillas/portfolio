import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import useScrollToTop from "./components/useScrollToTop";
import { extendTheme, QuaantumProvider, theme } from "@quaantum/components";

const myTheme = extendTheme(theme, {
  font: `'Montserrat', sans-serif`,
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      outline: "none",
    },

    body: {
      width: "100vw",
      padding: "0 20%",
      fontSize: "16px",
      background: "#292a2e",
      fontFamily: "Montserrat",
      overflowX: "hidden",
      zIndex: 1,
      color: "gray",
    },

    img: {
      height: "auto",
      maxWidth: "100%",
    },

    a: {
      textDecoration: "none",
      color: "#fff",
    },

    button: {
      color: "white",
      backgroundColor: "#222",
      borderRadius: "30px",
      border: "none",
      minWidth: "150px",
      minHeight: "50px",
      cursor: "pointer",
    },

    ".button": {
      color: "white",
      backgroundColor: "#222",
      borderRadius: "30px",
      border: "none",
      minWidth: "150px",
      padding: "15px",
      cursor: "pointer",
      textAlign: "center",
    },
  },
  colors: {
    gray: "#dfdfdf",
    blue: "#3f9bf7",
    red: "#ed5c5a",
    yellow: "#f7c367",
    green: "#7dd075",
  },
  components: {
    Box: {
      base: {},
      defaultVariant: "",
      variants: {
        linkWrapper: {
          cursor: "pointer",
          customCss: `
        & a {
          text-decoration: none;
          color: #fff;
          padding: 1em;
          opacity: 0.5;
          transition: all 0.3s ease-in-out;
        }

        & a:hover {
          opacity: 1;
        }
    `,
        },
      },
    },
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
