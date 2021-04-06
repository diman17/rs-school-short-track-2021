/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = matrix.slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === true) {
        //! not right
        if (j !== arr[i].length - 1) {
          if (!arr[i][j + 1] || Number.isInteger(arr[i][j + 1])) {
            arr[i][j + 1] += 1; //* right
          }
          //! not right and not down
          if (i !== arr.length - 1) {
            if (!arr[i + 1][j] || Number.isInteger(arr[i + 1][j])) {
              arr[i + 1][j] += 1; //* down
            }
            if (!arr[i + 1][j + 1] || Number.isInteger(arr[i + 1][j + 1])) {
              arr[i + 1][j + 1] += 1; //* right-down
            }
          }
          //! not right and not up
          if (i !== 0) {
            if (!arr[i - 1][j] || Number.isInteger(arr[i - 1][j])) {
              arr[i - 1][j] += 1; //* up
            }
            if (!arr[i - 1][j + 1] || Number.isInteger(arr[i - 1][j + 1])) {
              arr[i - 1][j + 1] += 1; //* up-right
            }
          }
        }
        //! not left
        if (j !== 0) {
          if (!arr[i][j - 1] || Number.isInteger(arr[i][j - 1])) {
            arr[i][j - 1] += 1; //* left
          }
          //! not left and not down
          if (i !== arr.length - 1) {
            if (!arr[i + 1][j - 1] || Number.isInteger(arr[i + 1][j - 1])) {
              arr[i + 1][j - 1] += 1; //* left-down
            }
          }
          //! not left and not up
          if (i !== 0) {
            if (!arr[i - 1][j - 1] || Number.isInteger(arr[i - 1][j - 1])) {
              arr[i - 1][j - 1] += 1; //* left-up
            }
          }
        }
      }
    }
  }

  for (let k = 0; k < arr.length; k++) {
    for (let l = 0; l < arr[k].length; l++) {
      if (arr[k][l] === true) {
        arr[k][l] = 1;
      }
      if (arr[k][l] === false) {
        arr[k][l] = 0;
      }
    }
  }

  return arr;
}

module.exports = minesweeper;
