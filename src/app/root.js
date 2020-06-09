import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import App from './app.js';

let store = createStore(reducers);
function Root()
{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root;