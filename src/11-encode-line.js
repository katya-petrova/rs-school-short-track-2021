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
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === str[i + 1]) {
      count++;
    } else {
      result += count + char;
      count = 1;
    }
  }

  return result.replace(/1/g, '');
}

module.exports = encodeLine;
