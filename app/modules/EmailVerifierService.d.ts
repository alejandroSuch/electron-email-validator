/// <reference path="../../typings/tsd.d.ts" />
declare class EmailVerifierService {
    static $inject: string[];
    private $q;
    constructor($q: angular.IQService);
    validate(email: string): angular.IPromise<any>;
}
