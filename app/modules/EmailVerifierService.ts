/// <reference path="../../typings/tsd.d.ts" />
import LogService = require('./LogService');

var remote:any = require('remote');
var EmailVerifier = remote.require('./app/modules/remote/EmailVerifier');
var mime:any = remote.require('mime-types');
var fs:any = remote.require('fs');


class EmailVerifierService {
	static $inject = ['$q', 'LogService', '$log'];
	private $q:angular.IQService;
	private logService:LogService;
	private $log:angular.ILogService;

	constructor($q:angular.IQService, logService:LogService, $log:angular.ILogService) {
		this.$q = $q;
		this.logService = logService;
		this.$log = $log;
	}

	public validate(email:string):angular.IPromise<any> {
		var deferred:angular.IDeferred<any> = this.$q.defer();

		EmailVerifier.verify(true, email, (error, data) => {
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

	public processFile (path:string) {
		let deferred = this.$q.defer();
		let mimeType = mime.lookup(path);

		switch(mimeType) {
			case 'text/plain':
				let lines = fs.readFileSync(path).toString().match(/[^\r\n]+/g);
				this.processPlainText(lines, { invalid:[], valid:[] }, deferred)
				break;
			default:
				break;
		}



		return deferred.promise;
	}

	private processPlainText = (lines, result, deferred) => {
		if(!lines.length) {
			deferred.resolve(result);
		}

		var email = lines.shift();

		this
			.validate(email)
			.then((data) => {
				this.$log.info(email, 'is valid');
				result.valid.push(email);
			})
			.catch((error) => {
				this.$log.info(email, 'is invalid');
				result.invalid.push(email);
			})
			.finally(() => {
				this.processPlainText(lines, result, deferred);
			});
	};
}

export = EmailVerifierService;
