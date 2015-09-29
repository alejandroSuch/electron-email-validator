/// <reference path="../../typings/tsd.d.ts" />

import Modals = require('./Modals');

var remote:any = require('remote');
var mime:any = remote.require('mime-types');

class DropZone implements ng.IDirective {
	private _modals:Modals;
	restrict = 'A';

	constructor(modals:Modals) {
		this._modals = modals;
	}

	compile = (element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
		var cancelEvent:Function = (event) => {
			event.preventDefault();
			event.stopPropagation();
		};

		var endFn:any = (event) => {
			cancelEvent(event);
			element.removeClass('drag-over');
		};

		var startFn:any = (event) => {
			cancelEvent(event);
			element.addClass('drag-over');
		};

		element.on('dragover', startFn);
		element.on('dragleave', endFn);
		element.on('drop', (event) => {
			endFn(event);

			let allowedTypes = attrs['allowedTypes'];
			let allowedTypesArray = allowedTypes.split(',');
			let file = event.dataTransfer.files[0];
			let mimeType = mime.lookup(file.path);

			if (allowedTypesArray.indexOf(mimeType) < 0) {
				this._modals.showInvalidFileTypeModal();
				return;
			}

			return false;
		});
		element.on('dragend', endFn);

		return this.link;
	};

	link = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes, ctrl:any) => {
	};

	static factory():ng.IDirectiveFactory {
		const directive = (modals:Modals) => new DropZone(modals);
		directive.$inject = ['Modals'];
		return directive;
	}
}

export = DropZone;
