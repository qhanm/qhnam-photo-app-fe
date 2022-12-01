import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom";
import { History } from "./History";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <Provider store={store}>
                <Router history={History}>
                    <App />
                </Router>
            </Provider>
        </Provider>
    // </React.StrictMode>
);

reportWebVitals();
