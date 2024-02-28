
export interface HeartBeat {
	blocknum : number;
    head_blocknum : number;
    last_irreversible_blocknum : number;
}

export interface PermissionLevel {
    actor : string;
    permission : string;
}

export interface AccountAuthSequence {
    account : string;
    sequence : number;
}

export interface TransactionTrace {
    id : string;
    blocknum : number;
    blocktimestamp : Date;
    status : string;
    cpu_usage_us : number;
    net_usage_words : number;
    elapsed : number;
    net_usage : number
    scheduled : boolean;
    action_traces : Array<ActionTrace>;
    except : string;
    error : number;

}

export interface ActionReceipt {
    receiver : string;
    act_digest : string;
    global_sequence : number;
    recv_sequence : number;
    auth_sequence : AccountAuthSequence[];
    code_sequence : number;
    abi_sequence : number;
}

export interface ActionTrace {
    tx_id : string;
    blocktimestamp : Date;
    receipt ?: ActionReceipt

    // Action name
    name : string;

    // Contract account.
    contract : string;

    receiver : string;
    data : any;
    Authorization : PermissionLevel[];
    except : string;
    error : string;
    return : Uint8Array;
}

export interface RollbackMessage {
	new_block : number;
	old_block : number;
}

export interface TableDeltaRows {
	present : boolean;
	data : any;
	raw_data: string;
}

export interface TableDelta {
	blocknum : number;
	blocktimestamp : Date;
	name : string;
	rows : TableDeltaRows[];
}
