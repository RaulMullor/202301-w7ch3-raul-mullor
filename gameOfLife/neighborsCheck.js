import tableGenerator from "./index.js";
const generatedBoard = tableGenerator(20, 20);
const checkNeigbors = () => {
  for (let x = 1; x < generatedBoard - 1; x++) {
    for (let y = 1; y < generatedBoard[x] - 1; y++) {
      let neighbors = 0;
      for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {
          neighbors += board[x + a][y + b];
        }
      }

      neighbors -= board[x][y];

      if (board[x][y] === 1 && neighbors < 2) board[x][y] = 2;
      else if (board[x][y] === 1 && neighbors > 3) board[x][y] = 2;
      else if (board[x][y] === 0 && neighbors === 3) board[x][y] = 3;
    }

    const board = [];
    const nextTurnBoard = board;
    console.table(nextTurnBoard);
  }
};

checkNeigbors();
