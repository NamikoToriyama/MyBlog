import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import Route from './Route';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route />, document.getElementById("root"));
serviceWorker.unregister();
