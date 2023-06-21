
export class Namespace {
    private prefix = "ship"
    private ns:string = "0000000000000000000000000000000000000000000000000000000000000000"

    constructor(opts ?: {prefix?:string, ns?:string}) {
        if (opts?.prefix) {
            this.prefix = opts.prefix;
        }

        if (opts?.ns) {
            this.ns = opts.ns;
        }
    }

    toString() : string {
        return this.prefix + "::" + this.ns;
    }
}