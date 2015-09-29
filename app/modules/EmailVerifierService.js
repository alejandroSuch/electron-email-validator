var remote = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');
var EmailVerifierService = (function () {
    function EmailVerifierService($q, logService) {
        this.$q = $q;
        this.logService = logService;
    }
    EmailVerifierService.prototype.validate = function (email) {
        var _this = this;
        var deferred = this.$q.defer();
        EmailVerifier.verify(email, function (error, data) {
            if (!!error) {
                _this.logService.logError(email, error);
                deferred.reject(error);
            }
            else if (!data.success) {
                _this.logService.logError(email, data);
                deferred.reject(data.info);
            }
            else {
                _this.logService.logSuccess(email);
                deferred.resolve(data.addr);
            }
        });
        return deferred.promise;
    };
    EmailVerifierService.$inject = ['$q', 'LogService'];
    return EmailVerifierService;
})();
module.exports = EmailVerifierService;
//# sourceMappingURL=EmailVerifierService.js.map