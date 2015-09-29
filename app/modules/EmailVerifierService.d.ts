/// <reference path="../../typings/tsd.d.ts" />
import LogService = require('./LogService');
declare class EmailVerifierService {
    static $inject: string[];
    private $q;
    private logService;
    constructor($q: angular.IQService, logService: LogService);
    validate(email: string): angular.IPromise<any>;
}
export = EmailVerifierService;
