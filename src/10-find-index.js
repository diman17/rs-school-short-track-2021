/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let lowIndex = 0;
  let hightIndex = array.length - 1;
  while (lowIndex <= hightIndex) {
    const midIndex = Math.floor((lowIndex + hightIndex) / 2);
    const guessValue = array[midIndex];

    if (guessValue < value) {
      lowIndex = midIndex + 1;
    }

    if (guessValue > value) {
      hightIndex = midIndex - 1;
    }

    if (guessValue === value) {
      return midIndex;
    }
  }
  return null;
}

module.exports = findIndex;
