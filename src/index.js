import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "./Routes";
import rootReducers from "./store/reducers/rootReducers";
const store = createStore(rootReducers);

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: Noto Sans KR;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
