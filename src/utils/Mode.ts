export default class Mode {
    static isDev(): boolean {
        return !this._isHttps();
    }

    private static _isHttps(): boolean {
        return window.location.protocol === "https:";
    }
}