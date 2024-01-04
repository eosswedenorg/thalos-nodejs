import { Namespace } from "./namespace";
import { Channel } from "../channel";
import { IReader } from "../reader";
import { createClient } from '@redis/client';
type RedisClient = ReturnType<typeof createClient>;
export declare class Reader implements IReader {
    private client;
    private ns;
    constructor(ns: Namespace, client: RedisClient);
    read(channel: Channel, handler: (message: any) => void): Promise<void>;
    close(): void;
}
export {};
