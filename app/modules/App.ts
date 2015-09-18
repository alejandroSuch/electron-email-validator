/// <reference path="../../typings/tsd.d.ts" />

require('../../node_modules/angular/angular');
require('../../node_modules/angular-animate/angular-animate.min');
require('../../node_modules/angular-aria/angular-aria.min');
require('../../node_modules/angular-material/angular-material.min');
require('../../node_modules/angular-ui-router/release/angular-ui-router.min');

var Constants = require('./Constants');

var SingleEmailValidationCtrl = require('./SingleEmailValidationCtrl');
var EmailVerifierService = require('./EmailVerifierService');
var Modals = require('./Modals');

class App {
    private static _initialized:boolean = false;
    private static _app:angular.IModule = angular.module(Constants.APP_NAME, ['ngMaterial', 'ui.router']);

    constructor() { }

    public static get initialized():boolean {
        return this._initialized;
    }

    public static set initialized(value:boolean) {
        throw new Error('Read-only attribute');
    }

    public static get app():angular.IModule {
        return this._app;
    }

    public static set app(value:angular.IModule) {
        throw new Error('Read-only attribute');
    }

    public static init():void {
		App._app.service('EmailVerifierService', EmailVerifierService);
		App._app.service('Modals', Modals);
		App._app.controller('SingleEmailValidationCtrl', SingleEmailValidationCtrl);

        if(!App.initialized) {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }
    }
}

export = App;
