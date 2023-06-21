# thalos-nodejs

Nodejs bindings for [thalos](https://github.com/eosswedenorg/thalos)

## Install

```sh
npm install --save thalos-nodejs
```

## Usage

Pure javascript:

```js
const thalos = require('thalos-nodejs');

// Create client.
const client = thalos.createRedisClient({
    // url: "redis://localhost:6379",
    // prefix: "ship",
    ns: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4" // wax mainnet
})

// Listen to heartbeat events.
client.onHeartbeat(hb => {
    console.log("Hearbeat: Blockno", hb.blocknum, "HEAD", hb.head_blocknum, "LIB", hb.last_irreversible_blocknum);
});
```

With typescript:

```ts
import * as thalos from 'thalos-nodejs';

// Create client.
const client = thalos.createRedisClient({
    // url: "redis://localhost:6379",
    // prefix: "ship",
    ns: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4" // wax mainnet
})

// Listen to heartbeat events.
client.onHeartbeat((hb:thalos.HeartBeat) => {
    console.log("Hearbeat: Blockno", hb.blocknum, "HEAD", hb.head_blocknum, "LIB", hb.last_irreversible_blocknum);
});
```

### Events

More examples on how to use different event callback below:

Listening on transactions

```js
// Listen on transactions
client.onTransaction(transaction => {
    console.log("Transaction", transaction.id);
});
```

```js
// Listen to one action.
client.onAction({contract: "m.federation", name: "mine"}, action => {
    console.log("Mine Action", action);
});
```

```js
// Listening on multiple actions.
client.onAction([ {contract: "eosio"}, {name: "mine"} ], action => {
    console.log("Action", action);
});
```

## Author

Henrik Hautakoski - [henrik@eossweden.org](mailto:henrik@eossweden.org)