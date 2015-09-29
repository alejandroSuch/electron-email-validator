declare class Log {
    private _lines;
    constructor();
    addLine(line: string): Log;
    lines: Array<string>;
}
