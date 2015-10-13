/// <reference path="../../typings/tsd.d.ts" />

require('../../node_modules/angular/angular');
require('../../node_modules/angular-animate/angular-animate.min');
require('../../node_modules/angular-aria/angular-aria.min');
require('../../node_modules/angular-material/angular-material.min');
require('../../node_modules/angular-ui-router/release/angular-ui-router.min');

var Constants = require('./Constants');

var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

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
		this.declareAngularComponents();

		/*var menu = new Menu();
		menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
		menu.append(new MenuItem({ type: 'separator' }));
		menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));*/

		window.addEventListener('contextmenu', function (e) {
			e.preventDefault();
			//menu.popup(remote.getCurrentWindow());
		}, false);

        if(!App.initialized) {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }

		App.disableDrop();
    }

	private static declareAngularComponents() {
		this.declareControllers();
		this.declareServices();
		this.declareDirectives();
	}

	private static declareDirectives() {
		App._app.directive('dropZone', require('./DropZone').factory());
	}

	private static declareServices() {
		App._app.service('EmailVerifierService', require('./EmailVerifierService'));
		App._app.service('Modals', require('./Modals'));
		App._app.service('LogService', require('./LogService'));
	}

	private static declareControllers() {
		App._app.controller('SingleEmailValidationCtrl', require('./SingleEmailValidationCtrl'));
		App._app.controller('MultipleEmailValidationCtrl', require('./MultipleEmailValidationCtrl'));
		App._app.controller('LogCtrl', require('./LogCtrl'));
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
