import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InitialState from "./state/reducers/initialState";
import Storage from "./utils/Storage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App settings={Storage.getSettings() || InitialState.settings}/>
);

reportWebVitals();
