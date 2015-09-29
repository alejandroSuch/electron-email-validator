import LogLine = require('./LogLine');
declare class LogService {
    private _lines;
    constructor();
    addLine(line: LogLine): LogService;
    lines: Array<LogLine>;
    logSuccess(email: any): LogService;
    logError(email: any, data: any): LogService;
}
export = LogService;
