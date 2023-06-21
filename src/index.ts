
export * from "./client";
export * from "./types";
export * from "./channel";

export * as redis from "./redis"

import { Namespace, Reader } from "./redis"
import { Client } from "./client"
import { createClient } from "@redis/client";

export function createRedisClient(opts ?: {url?: string, prefix ?: string, ns ?: string}) : Client {

    const rdb = createClient({url: opts?.url})
    rdb.connect()

    const reader_opts = new Namespace({ prefix: opts?.prefix, ns: opts?.ns });
    const reader = new Reader(reader_opts, rdb);

    return new Client(reader);
}