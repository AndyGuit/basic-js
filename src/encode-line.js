const { NotImplementedError } = require('../extensions/index.js');

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
  if (str.length === 0) return '';

  let resultStr = '';

  let curChar = str[0];
  let charsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === curChar) {
      charsCount++
    } else {
      resultStr += charsCount > 1 ? `${charsCount}${curChar}` : `${curChar}`;
      curChar = str[i];
      charsCount = 1;
    }
  }

  resultStr += charsCount > 1 ? `${charsCount}${curChar}` : `${curChar}`;

  return resultStr;
}

module.exports = {
  encodeLine
};
