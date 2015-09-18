/// <reference path="../../../typings/tsd.d.ts" />

var emailVerify = require('email-verify');

var options = {
    port: 25,
    sender: 'name@example.org',
    fdqn: 'mail.example.org'
};

class EmailVerifier {
    public static verify(email:string, callback:Function):void {
        emailVerify.verify(email, options, function (error, data) {
            callback.call(null, error, data);
        });
    }
}

export = EmailVerifier;