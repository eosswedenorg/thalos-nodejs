import { Channel } from "../channel"
import { Namespace } from "./namespace"

export class Key {
    private ns : Namespace
    private channel: Channel

    constructor(ns: Namespace, channel: Channel) {
        this.ns = ns;
        this.channel = channel;
    }

    public toString(): string {
        return this.ns + "::" + this.channel;
    }
}