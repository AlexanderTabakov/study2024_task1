import React from "react";
import global from "app/global";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "components/MainLayout";
import MainPage from "pages/MainPage";

const root = (
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
