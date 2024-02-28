
import { HeartBeat, ActionTrace, TransactionTrace, RollbackMessage, TableDelta } from './types';
import { IReader } from './reader';
import { Channel, HeartBeatChannel, TransactionChannel, ActionChannel, ActionChannelParams, RollbackChannel, TableDeltaChannel } from './channel';

export type HeartBeatHandler = (hb: HeartBeat) => void
export type ActionTraceHandler = (action : ActionTrace) => void
export type TransactionTraceHandler = (trace : TransactionTrace) => void
export type TableDeltaHandler = (tableDelta: TableDelta) => void
export type RollbackHandler = (rollback: RollbackMessage) => void

type decoderFn = (msg:any) => any;

export class Client {

    private reader : IReader;

    private decoder : decoderFn;

    constructor(reader: IReader) {
        this.reader = reader;

        // Only supporting json right now.
        this.decoder = JSON.parse;
    }

    async subscribe(channel:Channel, handler: (msg:any) => void) : Promise<Client> {
        this.reader.read(channel, (msg:any) => handler(this.decoder(msg)));
        return this;
    }

    async onHeartbeat(handler: HeartBeatHandler) : Promise<Client> {
        return this.subscribe(HeartBeatChannel, handler);
    }

    async onTransaction(handler: TransactionTraceHandler) : Promise<Client> {;
        return this.subscribe(TransactionChannel, handler);
    }

    async onAction(channel:ActionChannelParams | ActionChannelParams[], handler: ActionTraceHandler) : Promise<Client> {

        if (!(channel instanceof Array)) {
            channel = [ channel ]
        }
        for (const ch of channel) {
            this.subscribe(new ActionChannel(ch), handler);
        }
        return this;
    }

	async onDeltaTable(channels: string | string[] | null, handler: TableDeltaHandler) : Promise<Client> {

		if (channels === null) {
			return this.subscribe(new TableDeltaChannel(), handler);
		}

		if (!(channels instanceof Array)) {
			channels = [ channels ]
		}

		for (const ch of channels) {
			this.subscribe(new TableDeltaChannel(ch), handler);
		}
		return this;
	}

	async onRollback(handler: RollbackHandler) : Promise<Client> {
		return this.subscribe(RollbackChannel, handler);
	}
}
