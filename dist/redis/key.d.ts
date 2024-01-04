import { Channel } from "../channel";
import { Namespace } from "./namespace";
export declare class Key {
    private ns;
    private channel;
    constructor(ns: Namespace, channel: Channel);
    toString(): string;
}
