export * from "./client";
export * from "./types";
export * from "./channel";
export * as redis from "./redis";
import { Client } from "./client";
export declare function createRedisClient(opts?: {
    url?: string;
    prefix?: string;
    ns?: string;
}): Client;
