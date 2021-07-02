const generateCartel = require('./pkg/generateCartel.js');
const { newReplay } = require('./pkg/jsonReplays.js');
const { removeListener } = require('./pkg/emitter.js')
/* Returns true if the process isruning in development mode */
const isDev = !(process.env.NODE_ENV && process.env.NODE_ENV != 'production')

module.exports = {
    generateCartel,
    newReplay,
    isDev,
    removeListener
}
