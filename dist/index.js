"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisClient = exports.redis = void 0;
__exportStar(require("./client"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./channel"), exports);
exports.redis = require("./redis");
const redis_1 = require("./redis");
const client_1 = require("./client");
const client_2 = require("@redis/client");
function createRedisClient(opts) {
    const rdb = (0, client_2.createClient)({ url: opts?.url });
    rdb.connect();
    const reader_opts = new redis_1.Namespace({ prefix: opts?.prefix, ns: opts?.ns });
    const reader = new redis_1.Reader(reader_opts, rdb);
    return new client_1.Client(reader);
}
exports.createRedisClient = createRedisClient;
