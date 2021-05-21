/**
 * Create and returns a  custom `replay`
 * object.
 * 
 * @param {object || string}  error
 * @param {string} result
 * @param {object} payload
 */
const newReplay = (error = {}, result = "", payload = {}) => {
    return { error, result, payload }
};
module.exports = {newReplay}