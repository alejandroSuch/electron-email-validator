/// <reference path="../../typings/tsd.d.ts" />
import LogService = require('./LogService');

var remote:any = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');


class EmailVerifierService {
	static $inject = ['$q', 'LogService'];
	private $q:angular.IQService;
	private logService:LogService;

	constructor($q:angular.IQService, logService:LogService) {
		this.$q = $q;
		this.logService = logService;
	}

	public validate(email:string):angular.IPromise<any> {
		var deferred:angular.IDeferred<any> = this.$q.defer();

		EmailVerifier.verify(email, (error, data) => {
			if (!!error) {
				this.logService.logError(email, error);
				deferred.reject(error);
			} else if (!data.success) {
				this.logService.logError(email, data);
				deferred.reject(data.info);
			} else {
				this.logService.logSuccess(email);
				deferred.resolve(data.addr);
			}
		});

		return deferred.promise;
	}
}

export = EmailVerifierService;
