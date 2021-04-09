/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (i === array.length - 1 && array[i] === array[i - 1]) {
      result.push(array.length);
      result.push(array[i]);
    }
    if (array[i] !== array[i - 1]) {
      if (i !== 1) {
        result.push(i);
      }
      result.push(array[i - 1]);
      array = array.slice(i, array.length);
      i = 0;
      if (array.length === 1) {
        result.push(array[0]);
      }
    }
  }
  result = result.map((e) => String(e)).join('');
  return result;
}

module.exports = encodeLine;
