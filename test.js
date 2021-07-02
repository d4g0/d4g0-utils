const assert = require('assert').strict;

const { newReplay } = require('./index.js');
const { match, ok } = require('assert');
const { removeListener } = require('./pkg/emitter.js')

// Replay Setup
const rep_0 = newReplay(null, 'OK', null);

const MargaritaError = new Error('Margarita out of mint bep bep bep');
const rep_1 = newReplay(
    MargaritaError,
    'FAIL',
    null
)

// Replay Test
// 0
assert.strictEqual(rep_0.ok, true);
assert.deepStrictEqual(rep_0, { error: null, result: 'OK', ok: true, payload: null });
// 1
assert.strictEqual(rep_1.ok, undefined);
assert.deepStrictEqual(rep_1, {
    error: MargaritaError,
    result: 'FAIL', payload: null
});

// Emitter Test Setup
const Emitter = require('events');
const emitter = new Emitter()
emitter.on('message', handleMessage);
function handleMessage() {
}

// Emitter Test
removeListener(emitter, 'message', handleMessage)
assert.equal(emitter._eventsCount, 0)


