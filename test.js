const { newReplay } = require('./index.js');
const { match, ok } = require('assert');



const rep = newReplay(null, 'OK', null);
const rep1 = newReplay(
    new Error('Margarita out of mint bep bep bep'),
    'FAIL',
    null
)


console.log({
    rep,
    rep1
})
