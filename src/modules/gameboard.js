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
          if (this.array[y][i] === undefined) return "Placement cancelled: out of board boundaries";
        }
        // Place the ship
        for (let i = x; i < (ship.length + x); i++) {
          this.array[y][i].occupation = ship;
        }
      } else if (orientation === "vertical") {
        // Check if the ship will fit
        for (let i = y; i < (ship.length + y); i++) {
          if (this.array[i][x] === undefined) return "Placement cancelled: out of board boundaries";
        }
        // Place the ship
        for (let i = y; i < (ship.length + y); i++) {
          this.array[i][x].occupation = ship;
        }
      }
    } catch(err) {
      return "Cancel placement: out of board boundaries";
    }
    this.ships.push(ship);
  }
  receiveAttack(y, x) {
    if (this.array[y][x].checked) return "has already been shot"
    if (this.array[y][x].occupation !== "empty") this.array[y][x].occupation.hit(); 
  }
  shipsLeft() {
    for (const ship of this.ships) {
      if (!ship.sunk) return true;
    }
    return false;
  }
}

class Square {
  constructor() {
    this.checked = false;
    this.occupation = "empty";
  }
}

module.exports = Gameboard;