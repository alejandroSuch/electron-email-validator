var LogLine = require('./LogLine');
var LogService = (function () {
    function LogService() {
        this._lines = [];
    }
    LogService.prototype.addLine = function (line) {
        this._lines.unshift(line);
        return this;
    };
    Object.defineProperty(LogService.prototype, "lines", {
        get: function () {
            return this._lines;
        },
        enumerable: true,
        configurable: true
    });
    LogService.prototype.logSuccess = function (email) {
        var logLine = new LogLine;
        logLine.emailAddress = email;
        logLine.success = true;
        this.addLine(logLine);
        return this;
    };
    LogService.prototype.logError = function (email, data) {
        var logLine = new LogLine();
        logLine.emailAddress = email;
        logLine.error = true;
        logLine.message = JSON.stringify(data);
        this.addLine(logLine);
        return this;
    };
    return LogService;
})();
module.exports = LogService;
//# sourceMappingURL=LogService.js.map