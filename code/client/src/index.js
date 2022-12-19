import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';
import Login from './pages/Login';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        {/* <Login /> */}
        <App />
    </ContextProvider>,
    document.getElementById('root')
);