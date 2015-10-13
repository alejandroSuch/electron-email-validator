/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./EmailVerifierService.d.ts" />
/// <reference path="./Modals.d.ts" />
var MultipleEmailValidationCtrl = (function () {
    function MultipleEmailValidationCtrl($q, emailVerifierService, modals, $log) {
        this.$q = $q;
        this.emailVerifierService = emailVerifierService;
        this.modals = modals;
        this.$log = $log;
    }
    MultipleEmailValidationCtrl.prototype.processFile = function (path) {
        var _this = this;
        this
            .modals
            .showValidateEmailModal("Validando fichero...");
        var deferred = this.$q.defer();
        return deferred.promise.then(function (data) {
            _this.modals.hideModals();
            return data;
        });
    };
    MultipleEmailValidationCtrl.$inject = ['$q', 'EmailVerifierService', 'Modals', '$log'];
    return MultipleEmailValidationCtrl;
})();
module.exports = MultipleEmailValidationCtrl;
//# sourceMappingURL=MultipleEmailValidationCtrl.js.map