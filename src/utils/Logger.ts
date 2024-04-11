import Mode from "./Mode";

export default class Logger {
    static log(...args: any[]): void {
        Logger.logWithLevel(console.log, ...args);
    }

    static warn(...args: any[]): void {
        Logger.logWithLevel(console.warn, ...args);
    }

    static error(...args: any[]): void {
        Logger.logWithLevel(console.error, ...args);
    }

    private static logWithLevel(logFunction: (...args: any[]) => void, ...args: any[]): void {
        if (Mode.isDev() && !Mode.isTest()) {
            logFunction(...args);
        }
    }
}
