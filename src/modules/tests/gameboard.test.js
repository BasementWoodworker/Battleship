const Gameboard = require('../gameboard');
const Ship = require('../ships');
const board = new Gameboard;
const ship = new Ship(3);

test("Gameboard is successfully created", () => {
  expect(board).toBeDefined();
  expect(board.array).toBeDefined();
})

test("Ship can be placed", () => {
  board.placeShip(ship, 4, 5, "horizontal");
  expect(board.array[4][5].occupation).toBe(ship);
  expect(board.array[4][6].occupation).toBe(ship);
  expect(board.array[4][7].occupation).toBe(ship);
})

test("Ship can't be placed out of boundaries", () => {
  expect(
    board.placeShip(ship, 9, 9, "horizontal")
  ).toBe("Placement cancelled: out of board boundaries");
})

test("Ship placement works vertically", () => {
  board.placeShip(ship, 5, 5, "vertical");
  expect(board.array[5][5].occupation).toBe(ship);
  expect(board.array[6][5].occupation).toBe(ship);
  expect(board.array[7][5].occupation).toBe(ship);
})

test("Can hit ships", () => {
  const temp = new Gameboard();
  temp.placeShip(new Ship(2), 1, 7, "horizontal");
  temp.receiveAttack(1, 7);
  expect(temp.array[1][7].occupation.timesHit).toBe(1);
  temp.receiveAttack(1, 7);
  expect(temp.array[1][8].occupation.timesHit).toBe(2);
})

test("Detect if ships are still left", () => {
  const temp = new Gameboard();
  expect(temp.shipsLeft()).toBe(false);
  temp.placeShip(new Ship(1), 1, 7, "horizontal");
  expect(temp.shipsLeft()).toBe(true);
  temp.receiveAttack(1, 7);
  expect(temp.shipsLeft()).toBe(false);
}) 