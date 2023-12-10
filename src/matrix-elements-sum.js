const { NotImplementedError } = require('../extensions/index.js');

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
  let sum = 0;
  let startingIndex = 0;

  matrix.forEach(row => {
    for (let i = startingIndex; i < row.length; i++) {
      if (row[i] <= 0) {
        startingIndex = i + 1;
      } else {
        sum += row[i];
      }
    }
  })

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
