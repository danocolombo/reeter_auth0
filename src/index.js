import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from "./Auth";

const auth = new Auth();
let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};
/* eslint no-restricted-globals: 0*/
//---------------------------
// get name from login profile, or set to guest
let userName = auth.getProfile().given_name || "guest";
//---------------------------
// set initial state when app starts
let initialState = {
    name: userName,
    location: window.location.pathname.replace(/^\/?|\/$/g, ""),
    auth
};
window.setState(initialState);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
