const tableGenerator = (rows, columns) => {
  const board = [];
  for (let newRow = 0; newRow < rows; newRow++) {
    board[newRow] = [];
    for (let newColumn = 0; newColumn < columns; newColumn++) {
      board[newRow][newColumn] = 0;
    }
  }

  return board;
};

export default tableGenerator;
