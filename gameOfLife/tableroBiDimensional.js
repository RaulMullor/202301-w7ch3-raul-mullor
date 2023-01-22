const tableGenerator = () => {
  const rows = 25;
  const columns = 25;

  const table = doneTable(rows, columns);

  const doneTable = (rows, columns) => {
    const table = [];
    for (let newRow = 0; newRow < rows; newRow++) {
      table[newRow] = [];
      for (let newColumn = 0; newColumn < columns; newColumn++) {
        table[newRow][newColumn] = {};
      }
    }
  };

  return table;
};

tableGenerator();

export { tableGenerator };
