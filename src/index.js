import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import Route from './Route';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const store = createStore(reducer);

ReactDOM.render(<Route />, document.getElementById("root"));
serviceWorker.unregister();
