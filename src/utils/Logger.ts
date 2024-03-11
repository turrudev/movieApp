import Mode from "./Mode";

export default class Logger {
    static log(...args: any[]): void {
        if (Mode.isDev()) console.log(...args);
    }
}