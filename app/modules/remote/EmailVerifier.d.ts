/// <reference path="../../../typings/tsd.d.ts" />
declare class EmailVerifier {
    static verify(avoidDisposables: boolean, email: string, callback: Function): void;
}
export = EmailVerifier;
