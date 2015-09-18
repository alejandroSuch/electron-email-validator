/// <reference path="../../../typings/tsd.d.ts" />
declare class EmailVerifier {
    static verify(email: string, callback: Function): void;
}
export = EmailVerifier;
