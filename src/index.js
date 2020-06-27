import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import Route from './Route';
import * as serviceWorker from './serviceWorker';
import Header from "./Header";

ReactDOM.render(<Route />, document.getElementById("root"));
serviceWorker.unregister();
