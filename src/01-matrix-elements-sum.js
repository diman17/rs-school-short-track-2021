/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = [];
  let arrIndexZero;

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      const arr = matrix[0];
      const sum = arr.reduce((a, b) => a + b);
      result.push(sum);
    }

    if (i !== 0) {
      const arr = matrix[i].slice();

      for (let j = 0; j < arrIndexZero.length; j++) {
        arr.splice(arrIndexZero[j], 1, 0);
      }
      const sum = arr.reduce((acc, elem) => acc + elem);
      result.push(sum);
    }

    arrIndexZero = matrix[i].reduce((acc, elem, index) => {
      if (elem === 0) {
        acc.push(index);
      }
      return acc;
    }, []);
  }

  result = result.reduce((acc, elem) => acc + elem);

  return result;
}

module.exports = getMatrixElementsSum;
