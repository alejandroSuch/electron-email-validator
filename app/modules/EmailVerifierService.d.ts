/// <reference path="../../typings/tsd.d.ts" />
import LogService = require('./LogService');
declare class EmailVerifierService {
    static $inject: string[];
    private $q;
    private logService;
    private $log;
    constructor($q: angular.IQService, logService: LogService, $log: angular.ILogService);
    validate(email: string): angular.IPromise<any>;
    processFile(path: string): ng.IPromise<{}>;
    private processPlainText;
}
export = EmailVerifierService;
