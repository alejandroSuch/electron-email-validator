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
        App._app.service('EmailVerifierService', EmailVerifierService);
        App._app.service('Modals', Modals);
        App._app.controller('SingleEmailValidationCtrl', SingleEmailValidationCtrl);
        App._app.controller('LogCtrl', LogCtrl);
        App._app.service('LogService', LogService);
        App._app.directive('dropZone', DropZone.factory());
        if (!App.initialized) {
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }
        App.disableDrop();
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