/// <reference path="../../typings/tsd.d.ts" />

var remote:any = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');

class EmailVerifierService {
	static $inject = ['$q'];
	private $q:angular.IQService;

	constructor($q:angular.IQService) {
		this.$q = $q;
	}

	public validate(email:string):angular.IPromise<any> {
		var deferred:angular.IDeferred<any> = this.$q.defer();

		EmailVerifier.verify(email, function (error, data) {
			if (error) {
				deferred.reject(error);
			} else if (!data.success) {
				deferred.reject(data.info);
			} else {
				deferred.resolve(data.addr);
			}
		});

		return deferred.promise;
	}
}

export = EmailVerifierService;
