const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = '^^'
  let cats = 0;

  for (const arr of matrix) {
    for (const el of arr) {
      el === cat ? cats++ : null
    }
  }

  return cats
}

module.exports = {
  countCats
};
