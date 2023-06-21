
export abstract class Channel {

    abstract type(): string;

    abstract format(delimiter: string) : string;

    toString = () => this.format('/');
}

export class BaseChannel extends Channel {

    private items : string[]

    constructor(...items:string[]) {
        super();
        this.items = items;
    }

    type() : string {
        if (this.items.length > 0) {
            return this.items[0];
        }
        return "unknown";
    }

    format = (delimiter: string) => this.items.join(delimiter);
}

export interface ActionChannelParams{
    name ?: string,
    contract ?:string
}

export class ActionChannel extends Channel {

    public name ?: string;
    public contract ?: string;

    constructor(params ?: ActionChannelParams) {
        super()
        this.name = params?.name
        this.contract = params?.contract;
    }
    type = () => "actions";

    format(delimiter: string): string {
        const items:string[] = ["actions"]

        if (this.contract && this.contract.length > 0) {
            items.push("contract", this.contract);
        }

        if (this.name && this.name.length > 0) {
            items.push("name", this.name);
        }

        return items.join(delimiter)
    }

}

// Static channels.
export const HeartBeatChannel:Channel = new BaseChannel("heartbeat")
export const TransactionChannel:Channel = new BaseChannel("transactions")
