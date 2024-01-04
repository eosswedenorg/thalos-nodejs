"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
const key_1 = require("./key");
class Reader {
    constructor(ns, client) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ns = ns;
        this.client = client;
    }
    async read(channel, handler) {
        const key = new key_1.Key(this.ns, channel);
        this.client.subscribe(key.toString(), handler);
    }
    close() {
        // Nothing to do here. we don't own the redis connection so we should not close it.
    }
}
exports.Reader = Reader;
