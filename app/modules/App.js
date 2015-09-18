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
        if (!App.initialized) {
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['electron-email-validator']);
                App._initialized = true;
            });
        }
    };
    App._initialized = false;
    App._app = angular.module(Constants.APP_NAME, ['ngMaterial', 'ui.router']);
    return App;
})();
module.exports = App;
//# sourceMappingURL=App.js.map