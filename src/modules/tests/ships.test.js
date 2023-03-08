const Ship = require('../ships');
const ship = new Ship(3);

test("Ship is successfully created", () => {
  expect(ship).toBeDefined();
  expect(ship.length).toBe(3);
})