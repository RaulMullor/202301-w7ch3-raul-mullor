const tableGenerator = (rows, columns) => {
  const board = [];
  for (let newRow = 0; newRow < rows; newRow++) {
    board[newRow] = [];
    for (let newColumn = 0; newColumn < columns; newColumn++) {
      if (Math.random() < 0.3) {
        board[newRow][newColumn] = 1;
      } else board[newRow][newColumn] = 0;
    }
  }

  return board;
};

const generatedBoard = tableGenerator(20, 20);
console.table(generatedBoard);
export default tableGenerator;
