/// <reference path="../../typings/tsd.d.ts" />

class Modals {
	public static $inject = ['$mdDialog'];
	private $mdDialog;

	private validatingTpl:string = `
		<md-dialog aria-label="Validando email">
			<form>
				<md-toolbar>
					<div class="md-toolbar-tools">
						<h2>Validando {{ vm.email }}</h2>
						<span flex></span>
					</div>
				</md-toolbar>
				<md-dialog-content>
					<md-progress-linear md-mode="indeterminate"></md-progress-linear>
				</md-dialog-content>
			</form>
		</md-dialog>
	`;

	private validationResultTpl:string = `
		<md-dialog aria-label="Validando email">
			<form>
				<md-toolbar ng-class="{ 'md-accent': vm.hasError }">
					<div class="md-toolbar-tools">
						<h2>{{ vm.email }}</h2>
						<span flex></span>
					</div>
				</md-toolbar>
				<md-dialog-content>
					<p ng-if="!vm.hasError">La dirección de correo electrónico es válida</p>
					<p ng-if="vm.hasError">La dirección de correo electrónico no es válida</p>
				</md-dialog-content>
			</form>
		</md-dialog>
	`;

	private invalidFileTypeTpl:string = `
		<md-dialog aria-label="Tipo de fichero inválido">
			<form>
				<md-toolbar class="md-accent">
					<div class="md-toolbar-tools">
						<h2>Tipo de fichero erróneo</h2>
						<span flex></span>
					</div>
				</md-toolbar>
				<md-dialog-content>
					<p>Por favor, arrastra un fichero de texto, csv o excel</p>
				</md-dialog-content>
			</form>
		</md-dialog>
	`;

	constructor($mdDialog) {
		this.$mdDialog = $mdDialog;
	}

	public hideModals():angular.IPromise<any> {
		return this.$mdDialog.hide();
	}

	public showValidateEmailModal = (email:string):angular.IPromise<any> => {
		var controller = function () {
			this.email = email;
		};

		return this.show(controller, this.validatingTpl, false);
	};

	public showValidationResultModal = (email:string, error:any):angular.IPromise<any> => {
		var controller = function () {
			this.email = email;
			this.error = error;
			this.hasError = !!error;
			console.log('hasError', this.hasError);
		};

		return this.show(controller, this.validationResultTpl, true);
	};

	public showInvalidFileTypeModal = ():angular.IPromise<any> => {
		var controller = () => {
		};

		return this.show(controller, this.invalidFileTypeTpl, true);
	};

	private show = (controller, template, canBeClosed):angular.IPromise<any> => {
		return this.$mdDialog.show({
			controller: controller,
			controllerAs: 'vm',
			template: template,
			parent: angular.element(document.body),
			targetEvent: null,
			clickOutsideToClose: canBeClosed,
			escapeToClose: canBeClosed,
			focusOnOpen: true
		});
	};
}

export = Modals;
