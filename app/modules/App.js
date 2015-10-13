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
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "initialized", {
        get: function () {
            return this._initialized;
        },
        set: function (value) {
            throw new Error('Read-only attribute');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "app", {
        get: function () {
            return this._app;
        },
        set: function (value) {
            throw new Error('Read-only attribute');
        },
        enumerable: true,
        configurable: true
    });
    App.init = function () {
        this.declareAngularComponents();
        window.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
        if (!App.initialized) {
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }
        App.disableDrop();
    };
    App.declareAngularComponents = function () {
        this.declareControllers();
        this.declareServices();
        this.declareDirectives();
    };
    App.declareDirectives = function () {
        App._app.directive('dropZone', require('./DropZone').factory());
    };
    App.declareServices = function () {
        App._app.service('EmailVerifierService', require('./EmailVerifierService'));
        App._app.service('Modals', require('./Modals'));
        App._app.service('LogService', require('./LogService'));
    };
    App.declareControllers = function () {
        App._app.controller('SingleEmailValidationCtrl', require('./SingleEmailValidationCtrl'));
        App._app.controller('MultipleEmailValidationCtrl', require('./MultipleEmailValidationCtrl'));
        App._app.controller('LogCtrl', require('./LogCtrl'));
    };
    App.disableDrop = function () {
        document.addEventListener('dragover', function (event) {
            event.preventDefault();
            return false;
        }, false);
        document.addEventListener('drop', function (event) {
            event.preventDefault();
            return false;
        }, false);
    };
    App._initialized = false;
    App._app = angular.module(Constants.APP_NAME, ['ngMaterial', 'ui.router']);
    return App;
})();
module.exports = App;
//# sourceMappingURL=App.js.map