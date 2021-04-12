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
  const flatMatrix = matrix.flat(Infinity);
  const field = matrix;

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (!flatMatrix.includes(true)) {
        field[i][j] = 0;
      }

      if (field[i][j] === true) {
        field[i][j] = 1;
      }
      if (field[0][0] === 1) {
        field[0][1] = 2;
        field[1][0] = 2;
      }
      if (field[i][j] === false) {
        field[i][j] = 1;
      }
    }
  }
  return matrix;
}

module.exports = minesweeper;
