class Gameboard {
  constructor() {
    this.array = this.#buildBattlefield(this.#SIZE);
    this.ships = [];
  }
  #SIZE = 10;
  #buildBattlefield(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
      const line = [];
      result.push(line);
      for (let j = 0; j < size; j++) {
        line.push(new Square);
      }
    }
    return result;
  }
  getPlacementCoordinates(ship, y, x, orientation) {
    const coords = [];
    let i = 0;
    let shift = 0;
    while(true) {
      if (orientation === "horizontal") coords.push({y, x: (x - shift)})
      if (orientation === "vertical") coords.push({y: (y - shift), x})
      i++;
      if (i === ship.length) break;
      shift++;
      if (orientation === "horizontal") coords.push({y, x: (x + shift)})
      if (orientation === "vertical") coords.push({y: (y + shift), x})
      i++;
      if (i === ship.length) break;
    }
    return coords;
  }
  placeShip(ship, y, x, orientation) {
    const coords = this.getPlacementCoordinates(ship, y, x, orientation);
    for (const point of coords) {
      if (point.x < 0 || point.x > this.#SIZE - 1 || point.y < 0 || point.y > this.#SIZE - 1) return "Placement cancelled";
      if (this.array[point.y][point.x].occupation !== "empty") return "Placement cancelled";
    }
    for (const point of coords) {
      this.array[point.y][point.x].occupation = ship;
    }
    this.ships.push(ship);
  }
  receiveAttack(y, x) {
    if (x < 0 || x > this.#SIZE - 1 || y < 0 || y > this.#SIZE - 1) return "shot cancelled";
    const square = this.array[y][x];
    if (square.checked) return "shot cancelled"
    square.checked = true;
    if (square.occupation !== "empty") {
      square.occupation.hit();
      return "hit";
    } else return "shot missed";
  }
  shipsLeft() {
    for (const ship of this.ships) {
      if (!ship.sunk) return true;
    }
    return false;
  }
  placeAllRandomly(shipsForPlacement = []) {
    while (shipsForPlacement.length !== 0) {
      const ship = shipsForPlacement.shift();
      const x = Math.floor(Math.random()*this.#SIZE);
      const y = Math.floor(Math.random()*this.#SIZE);
      const orientation = Math.random() <= 0.5 ? "horizontal" : "vertical";
      if (this.placeShip(ship, y, x, orientation) === "Placement cancelled") shipsForPlacement.unshift(ship);
    }
  }
}

class Square {
  constructor() {
    this.checked = false;
    this.occupation = "empty";
  }
}

module.exports = Gameboard;