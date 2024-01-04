"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = void 0;
class Namespace {
    constructor(opts) {
        Object.defineProperty(this, "prefix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ship"
        });
        Object.defineProperty(this, "ns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "0000000000000000000000000000000000000000000000000000000000000000"
        });
        if (opts?.prefix) {
            this.prefix = opts.prefix;
        }
        if (opts?.ns) {
            this.ns = opts.ns;
        }
    }
    toString() {
        return this.prefix + "::" + this.ns;
    }
}
exports.Namespace = Namespace;
