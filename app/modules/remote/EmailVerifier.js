/// <reference path="../../../typings/tsd.d.ts" />
var emailVerify = require('email-verify');
var options = {
    port: 25,
    sender: 'name@example.org',
    fdqn: 'mail.example.org'
};
var EmailVerifier = (function () {
    function EmailVerifier() {
    }
    EmailVerifier.verify = function (email, callback) {
        emailVerify.verify(email, options, function (error, data) {
            callback.call(null, error, data);
        });
    };
    return EmailVerifier;
})();
module.exports = EmailVerifier;
//# sourceMappingURL=EmailVerifier.js.map