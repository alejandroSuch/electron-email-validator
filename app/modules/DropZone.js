/// <reference path="../../typings/tsd.d.ts" />
var remote = require('remote');
var mime = remote.require('mime-types');
var DropZone = (function () {
    function DropZone(modals) {
        var _this = this;
        this.restrict = 'A';
        this.require = 'ngController';
        this.compile = function (element, attrs) {
            var cancelEvent = function (event) {
                event.preventDefault();
                event.stopPropagation();
            };
            var endFn = function (event) {
                cancelEvent(event);
                element.removeClass('drag-over');
            };
            var startFn = function (event) {
                cancelEvent(event);
                element.addClass('drag-over');
            };
            element.on('dragover', startFn);
            element.on('dragleave', endFn);
            element.on('dragend', endFn);
            return function (scope, element, attrs, ctrl) {
                element.on('drop', function (event) {
                    endFn(event);
                    var allowedTypes = attrs['allowedTypes'];
                    var allowedTypesArray = allowedTypes.split(',');
                    var file = event.dataTransfer.files[0];
                    var mimeType = mime.lookup(file.path);
                    if (allowedTypesArray.indexOf(mimeType) < 0) {
                        _this._modals.showInvalidFileTypeModal();
                        return;
                    }
                    ctrl[attrs['onDropFile']].call(ctrl, file.path);
                });
            };
        };
        this._modals = modals;
    }
    DropZone.factory = function () {
        var directive = function (modals) { return new DropZone(modals); };
        directive.$inject = ['Modals'];
        return directive;
    };
    return DropZone;
})();
module.exports = DropZone;
//# sourceMappingURL=DropZone.js.map