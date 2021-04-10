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
  const sorted = [];
  const array = arr;
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (array[i] !== -1) {
      sorted.push(arr[i]);
      sorted.sort((a, b) => a - b);
    }
  }
  const x = array.map((item) => (item !== -1 ? 'z' : item));
  x.forEach((yourArray, index) => {
    if (yourArray === 'z') {
      indices.push(index);
    }
  });
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < indices.length; j++) {
      if (x[i] === 'z') {
        x.splice(indices[j], 1, sorted[j]);
      }
    }
  }
  return x;
}

module.exports = sortByHeight;
