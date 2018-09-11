'use strict';

const minPathSum = (grid) => {
  const row = grid.length;
  const col = grid[0].length;
  const outer = [];
  for (let i = 0; i < row; i += 1) {
    const inner = [];
    for (let j = 0; j < col; j += 1) {
      const a = outer[i - 1] !== undefined
        ? outer[i - 1][j] + grid[i][j] : undefined;
      const b = inner[j - 1] !== undefined ? inner[j - 1] + grid[i][j] : undefined;
      let winner;
      if (a === undefined && b === undefined) {
        winner = grid[i][j];
      } else if (b === undefined) {
        winner = a;
      } else if (a === undefined) {
        winner = b;
      } else {
        winner = a < b ? a : b;
      }
      inner.push(winner);
    }
    outer.push(inner);
  }
  return outer[row - 1][col - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
