import LogService = require('./LogService');
import LogLine = require('./LogLine');
declare class LogCtrl {
    static $inject: string[];
    visible: boolean;
    private logService;
    private $mdBottomSheet;
    constructor(logService: LogService, $mdBottomSheet: any);
    hasLines(): boolean;
    getLogEntries(): Array<LogLine>;
    toggleVisible(): void;
}
export = LogCtrl;
