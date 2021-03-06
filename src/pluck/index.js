/**
 * Extract a property from an object
 *
 * @func
 * @param {*} key
 * @param {Object} obj
 * @returns {*}
 *
 * @example
 * pluck('a', { a: 10 }); // 10
 */
const pluck = (key, obj) => obj[key];

export default pluck;
