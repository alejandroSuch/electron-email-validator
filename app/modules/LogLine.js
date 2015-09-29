var LogLine = (function () {
    function LogLine() {
        this._date = new Date();
        this._emailAddress = null;
        this._success = null;
        this._message = null;
    }
    Object.defineProperty(LogLine.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogLine.prototype, "emailAddress", {
        get: function () {
            return this._emailAddress;
        },
        set: function (value) {
            this._emailAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogLine.prototype, "success", {
        get: function () {
            return this._success;
        },
        set: function (value) {
            this._success = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogLine.prototype, "error", {
        get: function () {
            return !this._success;
        },
        set: function (value) {
            this._success = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogLine.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    return LogLine;
})();
module.exports = LogLine;
//# sourceMappingURL=LogLine.js.map