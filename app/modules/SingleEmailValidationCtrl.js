/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./EmailVerifierService.d.ts" />
/// <reference path="./Modals.d.ts" />
var remote = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');
var SingleEmailValidationCtrl = (function () {
    function SingleEmailValidationCtrl($q, $mdDialog, emailVerifierService, modals) {
        this.$q = $q;
        this.$mdDialog = $mdDialog;
        this.emailVerifierService = emailVerifierService;
        this.modals = modals;
    }
    SingleEmailValidationCtrl.prototype.validate = function ($event) {
        var _this = this;
        angular.element($event.target).find('input').blur();
        var vm = this;
        var $mdDialog = this.$mdDialog;
        this.modals.showValidateEmailModal(this.email);
        var finallyCallback = function () {
            var showValidationResultModal = function () {
                _this.modals.showValidationResultModal(_this.email, _this.error);
            };
            _this
                .modals
                .hideModals()
                .then(showValidationResultModal);
        };
        var successCallback = function () {
            _this.error = null;
        };
        var errorCallback = function (error) {
            _this.error = error;
        };
        this
            .modals
            .hideModals()
            .then(function () {
            _this
                .emailVerifierService
                .validate(_this.email)
                .then(successCallback)
                .catch(errorCallback)
                .finally(finallyCallback);
        });
    };
    Object.defineProperty(SingleEmailValidationCtrl.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    SingleEmailValidationCtrl.$inject = ['$q', '$mdDialog', 'EmailVerifierService', 'Modals'];
    return SingleEmailValidationCtrl;
})();
module.exports = SingleEmailValidationCtrl;
//# sourceMappingURL=SingleEmailValidationCtrl.js.map