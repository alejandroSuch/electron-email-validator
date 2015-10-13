var remote = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');
var mime = remote.require('mime-types');
var fs = remote.require('fs');
var EmailVerifierService = (function () {
    function EmailVerifierService($q, logService, $log) {
        var _this = this;
        this.processPlainText = function (lines, result, deferred) {
            if (!lines.length) {
                deferred.resolve(result);
            }
            var email = lines.shift();
            _this
                .validate(email)
                .then(function (data) {
                _this.$log.info(email, 'is valid');
                result.valid.push(email);
            })
                .catch(function (error) {
                _this.$log.info(email, 'is invalid');
                result.invalid.push(email);
            })
                .finally(function () {
                _this.processPlainText(lines, result, deferred);
            });
        };
        this.$q = $q;
        this.logService = logService;
        this.$log = $log;
    }
    EmailVerifierService.prototype.validate = function (email) {
        var _this = this;
        var deferred = this.$q.defer();
        EmailVerifier.verify(true, email, function (error, data) {
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
    EmailVerifierService.prototype.processFile = function (path) {
        var deferred = this.$q.defer();
        var mimeType = mime.lookup(path);
        switch (mimeType) {
            case 'text/plain':
                var lines = fs.readFileSync(path).toString().match(/[^\r\n]+/g);
                this.processPlainText(lines, { invalid: [], valid: [] }, deferred);
                break;
            default:
                break;
        }
        return deferred.promise;
    };
    EmailVerifierService.$inject = ['$q', 'LogService', '$log'];
    return EmailVerifierService;
})();
module.exports = EmailVerifierService;
//# sourceMappingURL=EmailVerifierService.js.map