import LogService = require('./LogService');
import LogLine = require('./LogLine');

class LogCtrl {
	static $inject = ['LogService', '$mdBottomSheet'];

	public visible:boolean;
	private logService:LogService;
	private $mdBottomSheet:any;

	constructor(logService:LogService, $mdBottomSheet:any) {
		this.visible = false;

		this.logService = logService;
		this.$mdBottomSheet = $mdBottomSheet;
	}

	public hasLines():boolean {
		return this.logService.lines.length > 0;
	}

	public getLogEntries():Array<LogLine> {
		return this.logService.lines;
	}

	public toggleVisible() {
		this.visible = !this.visible;
		var getLogEntries:Function = () => {
			return this.getLogEntries();
		};

		if (this.visible) {
			this
				.$mdBottomSheet
				.show({
					controller: function() {
						this.getLogEntries = getLogEntries;
					},
					controllerAs: 'vm',
					template: `
						<md-bottom-sheet style="max-height: 80%; overflow: hidden; overflow-y: scroll; box-sizing: border-box; padding: 0; transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); transition: none; -webkit-transition: none; z-index: 999">
							<md-list>
								<md-list-item ng-repeat="entry in vm.getLogEntries()">
									<span><span ng-if="entry.success">&#10003;</span><span ng-if="entry.error">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>
								</md-list-item>
								<md-list-item ng-repeat="entry in vm.getLogEntries()">
									<span><span ng-if="entry.success">&#10003;</span><span ng-if="entry.error">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>
								</md-list-item>
								<md-list-item ng-repeat="entry in vm.getLogEntries()">
									<span><span ng-if="entry.success">&#10003;</span><span ng-if="entry.error">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>
								</md-list-item>
							</md-list>
						</md-bottom-sheet>
					`
				})
				.then(() => {
					this.visible = false;
				})
				.catch(() => {
					this.visible = false;
				});
		}
	}
}

export = LogCtrl;
