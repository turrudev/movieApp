export interface SettingsState {
    counter: number;
}

export interface InitialStateProps {
    settings: SettingsState;
}

const initialState: InitialStateProps = {
    settings: {
        counter: 0
    }
};

export default initialState;