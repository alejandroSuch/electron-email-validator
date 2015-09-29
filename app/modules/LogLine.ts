class LogLine {
	private _date:Date;
	private _emailAddress:string;
	private _success:boolean;
	private _message:string;

	constructor() {
		this._date = new Date();
		this._emailAddress = null;
		this._success = null;
		this._message = null;
	}

	public get date():Date {
		return this._date;
	}

	public get emailAddress():string {
		return this._emailAddress;
	}

	public set emailAddress(value:string) {
		this._emailAddress = value;
	}

	public get success():boolean {
		return this._success;
	}

	public set success(value:boolean) {
		this._success = value;
	}

	public get error():boolean {
		return !this._success;
	}

	public set error(value:boolean) {
		this._success = !value;
	}

	public get message():string {
		return this._message;
	}

	public set message(value:string) {
		this._message = value;
	}
}

export = LogLine;
