/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="EmailVerifierService.d.ts" />
/// <reference path="Modals.d.ts" />
import EmailVerifierService = require('./EmailVerifierService');
declare class SingleEmailValidationCtrl {
    static $inject: string[];
    private $q;
    private $mdDialog;
    private hasError;
    private emailVerifierService;
    private modals;
    private error;
    constructor($q: any, $mdDialog: any, emailVerifierService: EmailVerifierService, modals: any);
    private _email;
    validate($event: any): void;
    email: string;
}
export = SingleEmailValidationCtrl;
