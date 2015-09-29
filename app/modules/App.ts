/// <reference path="../../typings/tsd.d.ts" />

require('../../node_modules/angular/angular');
require('../../node_modules/angular-animate/angular-animate.min');
require('../../node_modules/angular-aria/angular-aria.min');
require('../../node_modules/angular-material/angular-material.min');
require('../../node_modules/angular-ui-router/release/angular-ui-router.min');

var Constants = require('./Constants');

var LogCtrl = require('./LogCtrl');
var LogService = require('./LogService');
var SingleEmailValidationCtrl = require('./SingleEmailValidationCtrl');
var EmailVerifierService = require('./EmailVerifierService');
var Modals = require('./Modals');
var DropZone = require('./DropZone');

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
		App._app.controller('LogCtrl', LogCtrl);
		App._app.service('LogService', LogService);
		App._app.directive('dropZone', DropZone.factory());

        if(!App.initialized) {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }

		App.disableDrop();
    }

	private static disableDrop() {
		document.addEventListener('dragover', function (event) {
			event.preventDefault();
			return false;
		}, false);

		document.addEventListener('drop', function (event) {
			event.preventDefault();
			return false;
		}, false);
	}
}

export = App;
