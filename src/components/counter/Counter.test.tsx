import {render} from '@testing-library/react';
import App from "../../App";
import InitialState from "../../state/reducers/initialState";
import ReferenceLanguageFile from "../../_locales/en.json";

const defaultTranslations = ReferenceLanguageFile;

describe("Counter component", () => {
    test('MyComponent exists in the document', () => {
        const {getByText} = render(<App settings={InitialState.settings}/>);
        expect(getByText(defaultTranslations.increaseCounter)).toBeInTheDocument();
    });
});
