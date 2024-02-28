export declare abstract class Channel {
    abstract type(): string;
    abstract format(delimiter: string): string;
    toString: () => string;
}
export declare class BaseChannel extends Channel {
    private items;
    constructor(...items: string[]);
    type(): string;
    format: (delimiter: string) => string;
}
export interface ActionChannelParams {
    name?: string;
    contract?: string;
}
export declare class ActionChannel extends Channel {
    name?: string;
    contract?: string;
    constructor(params?: ActionChannelParams);
    type: () => string;
    format(delimiter: string): string;
}
export declare class TableDeltaChannel extends Channel {
    name?: string;
    constructor(name?: string);
    type: () => string;
    format(delimiter: string): string;
}
export declare const HeartBeatChannel: Channel;
export declare const TransactionChannel: Channel;
export declare const RollbackChannel: Channel;
