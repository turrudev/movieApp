import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./state/store/store";
import InitialState, {SettingsState} from "./state/reducers/initialState";
import Storage from "./utils/Storage";

const settings: SettingsState = Storage.getSettings() || InitialState.settings;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App settings={settings}/>
    </Provider>
);

reportWebVitals();
