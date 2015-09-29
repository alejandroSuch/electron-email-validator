/// <reference path="../../typings/tsd.d.ts" />
var Modals = (function () {
    function Modals($mdDialog) {
        var _this = this;
        this.validatingTpl = "\n\t\t<md-dialog aria-label=\"Validando email\">\n\t\t\t<form>\n\t\t\t\t<md-toolbar>\n\t\t\t\t\t<div class=\"md-toolbar-tools\">\n\t\t\t\t\t\t<h2>Validando {{ vm.email }}</h2>\n\t\t\t\t\t\t<span flex></span>\n\t\t\t\t\t</div>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-dialog-content>\n\t\t\t\t\t<md-progress-linear md-mode=\"indeterminate\"></md-progress-linear>\n\t\t\t\t</md-dialog-content>\n\t\t\t</form>\n\t\t</md-dialog>\n\t";
        this.validationResultTpl = "\n\t\t<md-dialog aria-label=\"Validando email\">\n\t\t\t<form>\n\t\t\t\t<md-toolbar ng-class=\"{ 'md-accent': vm.hasError }\">\n\t\t\t\t\t<div class=\"md-toolbar-tools\">\n\t\t\t\t\t\t<h2>{{ vm.email }}</h2>\n\t\t\t\t\t\t<span flex></span>\n\t\t\t\t\t</div>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-dialog-content>\n\t\t\t\t\t<p ng-if=\"!vm.hasError\">La direcci\u00F3n de correo electr\u00F3nico es v\u00E1lida</p>\n\t\t\t\t\t<p ng-if=\"vm.hasError\">La direcci\u00F3n de correo electr\u00F3nico no es v\u00E1lida</p>\n\t\t\t\t</md-dialog-content>\n\t\t\t</form>\n\t\t</md-dialog>\n\t";
        this.invalidFileTypeTpl = "\n\t\t<md-dialog aria-label=\"Tipo de fichero inv\u00E1lido\">\n\t\t\t<form>\n\t\t\t\t<md-toolbar class=\"md-accent\">\n\t\t\t\t\t<div class=\"md-toolbar-tools\">\n\t\t\t\t\t\t<h2>Tipo de fichero err\u00F3neo</h2>\n\t\t\t\t\t\t<span flex></span>\n\t\t\t\t\t</div>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-dialog-content>\n\t\t\t\t\t<p>Por favor, arrastra un fichero de texto, csv o excel</p>\n\t\t\t\t</md-dialog-content>\n\t\t\t</form>\n\t\t</md-dialog>\n\t";
        this.showValidateEmailModal = function (email) {
            var controller = function () {
                this.email = email;
            };
            return _this.show(controller, _this.validatingTpl, false);
        };
        this.showValidationResultModal = function (email, error) {
            var controller = function () {
                this.email = email;
                this.error = error;
                this.hasError = !!error;
                console.log('hasError', this.hasError);
            };
            return _this.show(controller, _this.validationResultTpl, true);
        };
        this.showInvalidFileTypeModal = function () {
            var controller = function () {
            };
            return _this.show(controller, _this.invalidFileTypeTpl, true);
        };
        this.show = function (controller, template, canBeClosed) {
            return _this.$mdDialog.show({
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
        this.$mdDialog = $mdDialog;
    }
    Modals.prototype.hideModals = function () {
        return this.$mdDialog.hide();
    };
    Modals.$inject = ['$mdDialog'];
    return Modals;
})();
module.exports = Modals;
//# sourceMappingURL=Modals.js.map