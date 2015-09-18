var emailVerify = module;
("email-verify");
var EmailVerifier = (function () {
    function EmailVerifier() {
    }
    EmailVerifier.verify = function (email, callback) {
        var options = null;
        emailVerify.verify(email, options, function (error, data) {
            if (error) {
                callback.call(null, error, null, null);
                return;
            }
            callback.call(null, null, data, null);
            return;
        });
    };
    return EmailVerifier;
})();
module.exports = EmailVerifier;
//# sourceMappingURL=EmailVerifier.js.map