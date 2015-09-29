var LogCtrl = (function () {
    function LogCtrl(logService, $mdBottomSheet) {
        this.visible = false;
        this.logService = logService;
        this.$mdBottomSheet = $mdBottomSheet;
    }
    LogCtrl.prototype.hasLines = function () {
        return this.logService.lines.length > 0;
    };
    LogCtrl.prototype.getLogEntries = function () {
        return this.logService.lines;
    };
    LogCtrl.prototype.toggleVisible = function () {
        var _this = this;
        this.visible = !this.visible;
        var getLogEntries = function () {
            return _this.getLogEntries();
        };
        if (this.visible) {
            this
                .$mdBottomSheet
                .show({
                controller: function () {
                    this.getLogEntries = getLogEntries;
                },
                controllerAs: 'vm',
                template: "\n\t\t\t\t\t\t<md-bottom-sheet style=\"max-height: 80%; overflow: hidden; overflow-y: scroll; box-sizing: border-box; padding: 0; transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); transition: none; -webkit-transition: none; z-index: 999\">\n\t\t\t\t\t\t\t<md-list>\n\t\t\t\t\t\t\t\t<md-list-item ng-repeat=\"entry in vm.getLogEntries()\">\n\t\t\t\t\t\t\t\t\t<span><span ng-if=\"entry.success\">&#10003;</span><span ng-if=\"entry.error\">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>\n\t\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t\t<md-list-item ng-repeat=\"entry in vm.getLogEntries()\">\n\t\t\t\t\t\t\t\t\t<span><span ng-if=\"entry.success\">&#10003;</span><span ng-if=\"entry.error\">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>\n\t\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t\t<md-list-item ng-repeat=\"entry in vm.getLogEntries()\">\n\t\t\t\t\t\t\t\t\t<span><span ng-if=\"entry.success\">&#10003;</span><span ng-if=\"entry.error\">&#10007;</span> [{{ entry.date | date:'dd-MM-yyyy HH:mm:ss' }}] <strong>{{ entry.emailAddress }}</strong>: {{ entry.message || '' }}</span>\n\t\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t</md-list>\n\t\t\t\t\t\t</md-bottom-sheet>\n\t\t\t\t\t"
            })
                .then(function () {
                _this.visible = false;
            })
                .catch(function () {
                _this.visible = false;
            });
        }
    };
    LogCtrl.$inject = ['LogService', '$mdBottomSheet'];
    return LogCtrl;
})();
module.exports = LogCtrl;
//# sourceMappingURL=LogCtrl.js.map