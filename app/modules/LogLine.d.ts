declare class LogLine {
    private _date;
    private _emailAddress;
    private _success;
    private _message;
    constructor();
    date: Date;
    emailAddress: string;
    success: boolean;
    error: boolean;
    message: string;
}
export = LogLine;
