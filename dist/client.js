"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const channel_1 = require("./channel");
class Client {
    constructor(reader) {
        Object.defineProperty(this, "reader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "decoder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reader = reader;
        // Only supporting json right now.
        this.decoder = JSON.parse;
    }
    async subscribe(channel, handler) {
        this.reader.read(channel, (msg) => handler(this.decoder(msg)));
        return this;
    }
    async onHeartbeat(handler) {
        return this.subscribe(channel_1.HeartBeatChannel, handler);
    }
    async onTransaction(handler) {
        ;
        return this.subscribe(channel_1.TransactionChannel, handler);
    }
    async onAction(channel, handler) {
        if (!(channel instanceof Array)) {
            channel = [channel];
        }
        for (const ch of channel) {
            this.subscribe(new channel_1.ActionChannel(ch), handler);
        }
        return this;
    }
    async onDeltaTable(channels, handler) {
        if (channels === null) {
            return this.subscribe(new channel_1.TableDeltaChannel(), handler);
        }
        if (!(channels instanceof Array)) {
            channels = [channels];
        }
        for (const ch of channels) {
            this.subscribe(new channel_1.TableDeltaChannel(ch), handler);
        }
        return this;
    }
    async onRollback(handler) {
        return this.subscribe(channel_1.RollbackChannel, handler);
    }
}
exports.Client = Client;
