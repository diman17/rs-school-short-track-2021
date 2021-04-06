/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let result = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      const index = arr1.indexOf(arr2[i]);
      result++;
      arr1.splice(index, 1);
      arr2.splice(i, 1);
      i--;
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
