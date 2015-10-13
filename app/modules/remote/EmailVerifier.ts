/// <reference path="../../../typings/tsd.d.ts" />

var emailVerify = require('email-verify');
var freemail = require('freemail');

var options = {
	port: 25,
	sender: 'name@example.org',
	fdqn: 'mail.example.org'
};

class EmailVerifier {
	public static verify(avoidDisposables:boolean, email:string, callback:Function):void {
		var isDisposable = freemail.isDisposable(email);
        if (avoidDisposables && isDisposable) {
			setTimeout(function(){
				callback.call(null, "Disposable email", null);
			});
		} else {
			emailVerify.verify(email, options, function (error, data) {
				callback.call(null, error, data);
			});
		}
	}
}

export = EmailVerifier;
