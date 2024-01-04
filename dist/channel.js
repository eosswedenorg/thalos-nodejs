"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionChannel = exports.HeartBeatChannel = exports.ActionChannel = exports.BaseChannel = exports.Channel = void 0;
class Channel {
    constructor() {
        Object.defineProperty(this, "toString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => this.format('/')
        });
    }
}
exports.Channel = Channel;
class BaseChannel extends Channel {
    constructor(...items) {
        super();
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (delimiter) => this.items.join(delimiter)
        });
        this.items = items;
    }
    type() {
        if (this.items.length > 0) {
            return this.items[0];
        }
        return "unknown";
    }
}
exports.BaseChannel = BaseChannel;
class ActionChannel extends Channel {
    constructor(params) {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contract", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => "actions"
        });
        this.name = params?.name;
        this.contract = params?.contract;
    }
    format(delimiter) {
        const items = ["actions"];
        if (this.contract && this.contract.length > 0) {
            items.push("contract", this.contract);
        }
        if (this.name && this.name.length > 0) {
            items.push("name", this.name);
        }
        return items.join(delimiter);
    }
}
exports.ActionChannel = ActionChannel;
// Static channels.
exports.HeartBeatChannel = new BaseChannel("heartbeat");
exports.TransactionChannel = new BaseChannel("transactions");
