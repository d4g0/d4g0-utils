/**
 * Removes the `event listener` from the `emitter`
 */
function removeListener(
    emitter,
    event,
    listener,
) {
    if (
        emitter &&
        emitter.removeListener &&
        typeof emitter.removeListener == 'function'
    ) {
        emitter.removeListener(event, listener)
    }
}

module.exports = {
    removeListener
}