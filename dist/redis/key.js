"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
class Key {
    constructor(ns, channel) {
        Object.defineProperty(this, "ns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ns = ns;
        this.channel = channel;
    }
    toString() {
        return this.ns + "::" + this.channel;
    }
}
exports.Key = Key;
