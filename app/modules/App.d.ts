/// <reference path="../../typings/tsd.d.ts" />
declare class App {
    private static _initialized;
    private static _app;
    constructor();
    static initialized: boolean;
    static app: angular.IModule;
    static init(): void;
    private static disableDrop();
}
export = App;
