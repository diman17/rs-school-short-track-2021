/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrMinusOne = arr.reduce((acc, elem, index) => {
    if (elem === -1) {
      acc.push(index);
    }
    return acc;
  }, []);

  const result = arr.filter((el) => el !== -1);

  result.sort((a, b) => a - b);

  for (let i = 0; i < arrMinusOne.length; i++) {
    result.splice(arrMinusOne[i], 0, -1);
  }

  return result;
}

module.exports = sortByHeight;
