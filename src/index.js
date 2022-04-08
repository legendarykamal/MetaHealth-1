import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/responsive.css";

import "popper.js";

const loader = document.querySelector("#preloader");
const hideLoader = () => loader.classList.add("loader--hide");

const container = document.getElementById("root");

ReactDOM.render(<App hideLoader={hideLoader} />, container);
