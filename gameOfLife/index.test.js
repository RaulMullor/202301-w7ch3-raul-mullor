import tableGenerator from "./index.js";

describe("Given a function tableGenerator", () => {
  describe("When it receives 3, 3", () => {
    test("Then it should return 3", () => {});

    const board = tableGenerator(3, 3);

    expect(board.length).toBe(3);
  });
});
