/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./EmailVerifierService.d.ts" />
/// <reference path="./Modals.d.ts" />

import EmailVerifierService = require('./EmailVerifierService');

class SingleEmailValidationCtrl {
	static $inject = ['$q', '$mdDialog', 'EmailVerifierService', 'Modals'];

	private $q:angular.IQService;
	private $mdDialog;
	private hasError:boolean;
	private emailVerifierService:EmailVerifierService;
	private modals;
	private error;

	constructor($q, $mdDialog, emailVerifierService:EmailVerifierService, modals) {
		this.$q = $q;
		this.$mdDialog = $mdDialog;
		this.emailVerifierService = emailVerifierService;
		this.modals = modals;
	}

	private _email:string;

	public validate($event) {
		angular.element($event.target).find('input').blur();

		var vm = this;
		var $mdDialog = this.$mdDialog;

		this.modals.showValidateEmailModal(this.email);

		var finallyCallback = () => {
			var showValidationResultModal:Function = () => {
				this
					.modals
					.showValidationResultModal(this.email, this.error)
					.finally(() => {
						document
							.querySelector('input[ng-model="vm.email"')
							.select();
					});
			};

			this
				.modals
				.hideModals()
				.then(showValidationResultModal);
		};

		var successCallback = () => {
			this.error = null;
		};

		var errorCallback = (error) => {
			this.error = error;
		};

		this
			.modals
			.hideModals()
			.then(() => {
				this
					.emailVerifierService
					.validate(this.email)
					.then(successCallback)
					.catch(errorCallback)
					.finally(finallyCallback);
			});
	}


	public get email():string {
		return this._email;
	}

	public set email(value:string) {
		this._email = value;
	}
}

export = SingleEmailValidationCtrl;
