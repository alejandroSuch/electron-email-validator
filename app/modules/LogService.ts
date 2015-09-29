import LogLine = require('./LogLine');

class LogService {
	private _lines:Array<LogLine>;

	constructor() {
		this._lines = [];
	}

	public addLine(line:LogLine):LogService {
		this._lines.unshift(line);
		return this;
	}

	public get lines():Array<LogLine> {
		return this._lines;
	}

	public logSuccess(email):LogService {
		var logLine = new LogLine;
		logLine.emailAddress = email;
		logLine.success = true;

		this.addLine(logLine);

		return this;
	}

	public logError(email, data):LogService {
		var logLine:LogLine = new LogLine();
		logLine.emailAddress = email;
		logLine.error = true;
		logLine.message = JSON.stringify(data);

		this.addLine(logLine);

		return this;
	}
}

export = LogService;
