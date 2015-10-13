/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="EmailVerifierService.d.ts" />
/// <reference path="Modals.d.ts" />
import EmailVerifierService = require('./EmailVerifierService');
import Modals = require('./Modals');
declare class MultipleEmailValidationCtrl {
    static $inject: string[];
    private $q;
    private emailVerifierService;
    private modals;
    private $log;
    constructor($q: any, emailVerifierService: EmailVerifierService, modals: Modals, $log: angular.ILogService);
    processFile(path: string): ng.IPromise<{}>;
}
export = MultipleEmailValidationCtrl;
