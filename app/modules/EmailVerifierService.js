/// <reference path="../../typings/tsd.d.ts" />
var remote = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');
var EmailVerifierService = (function () {
    function EmailVerifierService($q) {
        this.$q = $q;
    }
    EmailVerifierService.prototype.validate = function (email) {
        var deferred = this.$q.defer();
        EmailVerifier.verify(email, function (error, data) {
            if (error) {
                deferred.reject(error);
            }
            else if (!data.success) {
                deferred.reject(data.info);
            }
            else {
                deferred.resolve(data.addr);
            }
        });
        return deferred.promise;
    };
    EmailVerifierService.$inject = ['$q'];
    return EmailVerifierService;
})();
module.exports = EmailVerifierService;
//# sourceMappingURL=EmailVerifierService.js.map