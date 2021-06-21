/**
 * Create and returns a  custom `replay`
 * object like the folowing.
 * Adiccionally adds a `ok` truthy prop if result is `'OK'`
 * for shorter positive comprobation
 * 
 * ```js 
 * {
 *  error,     // prefered Error instance
 *  result,    // status string: 'OK' or 'FAIL'
 *  payload    // anything that must be returned
 * }
 * ```
 * @param {object} error
 * @param {string} result
 * @param {object} payload
 */
const newReplay = (error = {}, result = "OK" || 'FAIL', payload = {}) => {
    const replay = {
        error,
        payload,
        result
    }

    if (result == 'OK') {
        replay.ok = true;
    }

    return replay
};
module.exports = { newReplay }