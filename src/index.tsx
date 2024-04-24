import React from "react";
import global from "app/global";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";
import Global from "app/global";

const root = (
  <BrowserRouter>
    <MainPage />
    <Global />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
