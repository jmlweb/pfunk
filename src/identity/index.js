/**
 * Returns the value untouched
 *
 * @func
 * @param {*} x
 * @returns {*}
 *
 * @example
 * [undefined, 'a', null, 'b'].filter(identity); // ['a', 'b']
 */
const identity = x => x;

export default identity;
