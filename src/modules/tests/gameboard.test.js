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
  expect(board.array[4][4].occupation).toBe(ship);
  expect(board.array[4][5].occupation).toBe(ship);
  expect(board.array[4][6].occupation).toBe(ship);
})

test("Ship can't be placed out of boundaries", () => {
  expect(
    board.placeShip(ship, 9, 9, "horizontal")
  ).toBe("Placement cancelled");
})

test("Ship placement works vertically", () => {
  const board = new Gameboard;
  const ship = new Ship(3);
  board.placeShip(ship, 5, 5, "vertical");
  expect(board.array[4][5].occupation).toBe(ship);
  expect(board.array[5][5].occupation).toBe(ship);
  expect(board.array[6][5].occupation).toBe(ship);
})

test("Ships cannot override each other", () => {
  const temp = new Gameboard();
  temp.placeShip(new Ship(5), 3, 7, "horizontal");
  expect(temp.placeShip(new Ship(5), 3, 5, "horizontal")).toBe("Placement cancelled");
  expect(temp.array[1][4].occupation).toBe("empty");
})

test("Can hit ships", () => {
  const temp = new Gameboard();
  temp.placeShip(new Ship(2), 1, 7, "horizontal");
  temp.receiveAttack(1, 7);
  expect(temp.array[1][7].occupation.timesHit).toBe(1);
  temp.receiveAttack(1, 8);
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

test("Get the right placement coordinates", () => {
  const temp = new Gameboard();
  const ship1 = new Ship(1);
  const ship2 = new Ship(2);
  const ship3 = new Ship(3);
  const ship4 = new Ship(4);
  const ship5 = new Ship(5);
  expect(temp.getPlacementCoordinates(ship1, 5, 5, "horizontal")).toEqual([
    {y: 5, x: 5}
  ])
  expect(temp.getPlacementCoordinates(ship2, 5, 5, "horizontal")).toEqual([
    {y: 5, x: 5},
    {y: 5, x: 6}
  ])
  expect(temp.getPlacementCoordinates(ship3, 5, 5, "horizontal")).toEqual([
    {y: 5, x: 5},
    {y: 5, x: 6},
    {y: 5, x: 4}
  ])
  expect(temp.getPlacementCoordinates(ship4, 5, 5, "horizontal")).toEqual([
    {y: 5, x: 5},
    {y: 5, x: 6},
    {y: 5, x: 4},
    {y: 5, x: 7}
  ])
  expect(temp.getPlacementCoordinates(ship5, 5, 5, "horizontal")).toEqual([
    {y: 5, x: 5},
    {y: 5, x: 6},
    {y: 5, x: 4},
    {y: 5, x: 7},
    {y: 5, x: 3}
  ])
  expect(temp.getPlacementCoordinates(ship4, 5, 5, "vertical")).toEqual([
    {y: 5, x: 5},
    {y: 6, x: 5},
    {y: 4, x: 5},
    {y: 7, x: 5}
  ])
})