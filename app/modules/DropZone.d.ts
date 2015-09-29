/// <reference path="../../typings/tsd.d.ts" />
import Modals = require('./Modals');
declare class DropZone implements ng.IDirective {
    private _modals;
    restrict: string;
    constructor(modals: Modals);
    compile: (element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => void;
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => void;
    static factory(): ng.IDirectiveFactory;
}
export = DropZone;
