import { HeartBeat, ActionTrace, TransactionTrace } from './types';
import { IReader } from './reader';
import { Channel, ActionChannelParams } from './channel';
export type HeartBeatHandler = (hb: HeartBeat) => void;
export type ActionTraceHandler = (action: ActionTrace) => void;
export type TransactionTraceHandler = (trace: TransactionTrace) => void;
export declare class Client {
    private reader;
    private decoder;
    constructor(reader: IReader);
    subscribe(channel: Channel, handler: (msg: any) => void): Promise<Client>;
    onHeartbeat(handler: HeartBeatHandler): Promise<Client>;
    onTransaction(handler: TransactionTraceHandler): Promise<Client>;
    onAction(channel: ActionChannelParams | ActionChannelParams[], handler: ActionTraceHandler): Promise<Client>;
}
