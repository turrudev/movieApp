import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import InitialState from "./state/reducers/initialState";

describe('App Component', () => {
    beforeEach(() => {
        render(<App settings={InitialState.settings}/>);
    });

    test('renders without crashing', () => {
        // This test just checks that the component renders without crashing
    });
});
