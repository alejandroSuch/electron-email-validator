/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./EmailVerifierService.d.ts" />
/// <reference path="./Modals.d.ts" />

import EmailVerifierService = require('./EmailVerifierService');
import Modals = require('./Modals');

class MultipleEmailValidationCtrl {
	static $inject = ['$q', 'EmailVerifierService', 'Modals', '$log'];

	private $q:angular.IQService;
	private emailVerifierService:EmailVerifierService;
	private modals:Modals;
	private $log:angular.ILogService;

	constructor($q, emailVerifierService:EmailVerifierService, modals:Modals, $log:angular.ILogService) {
		this.$q = $q;
		this.emailVerifierService = emailVerifierService;
		this.modals = modals;
		this.$log = $log;
	}

	public processFile(path:string) {
		this
			.modals
			.showValidateEmailModal("Validando fichero...");

		let deferred = this.$q.defer();



		return deferred.promise.then((data) => {
			this.modals.hideModals();
			return data;
		});
	}
}

export = MultipleEmailValidationCtrl;
