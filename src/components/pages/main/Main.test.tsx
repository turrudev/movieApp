import React from 'react';
import {render} from '@testing-library/react';
import ReferenceLanguageFile from "../../../_locales/en.json";
import App from '../../../App';

const expectedDocumentTitle: string = ReferenceLanguageFile.welcomePageTitle;

describe('Main Page Component', () => {
    beforeEach(() => {
        render(<App/>);
    });

    test('renders without crashing', () => {
        // This test just checks that the component renders without crashing
    });

    test('the user lands on it on first load without any interaction', () => {
        expect(document.title).toBe(expectedDocumentTitle);
    });
});
