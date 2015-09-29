/// <reference path="../../typings/tsd.d.ts" />
declare class Modals {
    static $inject: string[];
    private $mdDialog;
    private validatingTpl;
    private validationResultTpl;
    private invalidFileTypeTpl;
    constructor($mdDialog: any);
    hideModals(): angular.IPromise<any>;
    showValidateEmailModal: (email: string) => ng.IPromise<any>;
    showValidationResultModal: (email: string, error: any) => ng.IPromise<any>;
    showInvalidFileTypeModal: () => ng.IPromise<any>;
    private show;
}
export = Modals;
