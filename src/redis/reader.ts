import { Namespace } from "./namespace";
import { Channel } from "../channel";
import { IReader } from "../reader";
import { createClient } from '@redis/client';
import { Key } from "./key";

type RedisClient = ReturnType<typeof createClient>

export class Reader implements IReader {

    private client : RedisClient;

    private ns : Namespace

    constructor(ns:Namespace, client: RedisClient) {
        this.ns = ns;
        this.client = client;
    }

    async read(channel: Channel, handler : (message: any) => void): Promise<void> {

        const key = new Key(this.ns, channel)

        //const conn = this.client.duplicate();
        //await conn.connect()

        console.log("Redis subscribe", key.toString())

        //conn.subscribe(key.toString(), handler);

        this.client.subscribe(key.toString(), handler)
    }

    close() {

    }
}