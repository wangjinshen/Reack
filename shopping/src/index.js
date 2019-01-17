import React from 'react';
import ReactDOM from 'react-dom';
import App from './contents/app';
import store from './store/action';
import {Provider} from "react-redux";
import "./common/css/style.css"
ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>
, document.getElementById('root'));