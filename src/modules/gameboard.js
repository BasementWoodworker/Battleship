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
  placeShip(ship, y, x, orientation) {
    try {
      if (orientation === "horizontal") {
        // Check if the ship will fit
        for (let i = x; i < (ship.length + x); i++) {
          if (this.array[y][i] === undefined || this.array[y][i].occupation !== "empty") return "Placement cancelled";
        }
        // Place the ship
        for (let i = x; i < (ship.length + x); i++) {
          this.array[y][i].occupation = ship;
        }
      } else if (orientation === "vertical") {
        // Check if the ship will fit
        for (let i = y; i < (ship.length + y); i++) {
          if (this.array[i][x] === undefined || this.array[i][x].occupation !== "empty") return "Placement cancelled";
        }
        // Place the ship
        for (let i = y; i < (ship.length + y); i++) {
          this.array[i][x].occupation = ship;
        }
      }
    } catch(err) {
      return "Placement cancelled";
    }
    this.ships.push(ship);
  }
  receiveAttack(y, x) {
    const square = this.array[y][x];
    if (square.checked) return "has already been shot"
    if (square.occupation !== "empty") {
      square.occupation.hit();
      if (square.occupation.isSunk()) this.ships = this.ships.filter(ship => ship !== square.occupation);
    }
    square.checked = true;
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