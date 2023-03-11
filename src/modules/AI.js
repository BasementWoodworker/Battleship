class AI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.difficulty = "normal";
    this.foundShip = null;
    this.foundShipAdjacentCoords = [];
    this.foundShipOrientation = null;
    this.optionPositive = null;
    this.optionNegative = null;
    this.state = 0;
  }
  reset() {
    this.#legalMoves = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.#legalMoves.push({y: i, x: j});
      }
    }
    shuffleArray(this.#legalMoves);
  }
  #legalMoves;
  // 1. Do random shots until a ship is found
  // 2. Find ship's orientation
  // 3. Shoot in line until the ship ends (try both directions)
  takeTurn(enemyBoard) {
    if (this.state === 0)
      this.randomTurn(enemyBoard);
    else if (this.state === 1) 
      this.findShipOrientation(enemyBoard);
    else if (this.state === 2)
      this.shootInLine(enemyBoard);
  }
  randomTurn(enemyBoard) {
    console.log("STATE 0: random shot");
    let result;
    let y;
    let x;
    while (true) {
      const move = this.#legalMoves.shift();
      y = move.y;
      x = move.x;
      result = enemyBoard.receiveAttack(y, x);
      if (result !== "shot cancelled") break;
    }
    if (this.difficulty === "easy") return;
    if (result === "hit") {
      this.state = 1;
      this.foundShip = {y, x};
      this.foundShipAdjacentCoords.push({y: y + 1,x: x});
      this.foundShipAdjacentCoords.push({y: y - 1,x: x});
      this.foundShipAdjacentCoords.push({y: y,x: x + 1});
      this.foundShipAdjacentCoords.push({y: y,x: x - 1});
      shuffleArray(this.foundShipAdjacentCoords);
    }
  }
  findShipOrientation(enemyBoard) {
    console.log("STATE 1: finding ship continuation");
    const adjacent = this.foundShipAdjacentCoords.shift();
    if (adjacent === undefined) {
      this.state = 0;
      this.takeTurn(enemyBoard);
      return;
    }
    console.log(this.foundShipAdjacentCoords)
    const result = enemyBoard.receiveAttack(adjacent.y, adjacent.x)
    if (result === "shot cancelled") {
      this.findShipOrientation(enemyBoard);
      return;
    }
    else if (result === "hit") {
      this.state = 2;
      this.foundShipAdjacentCoords = [];
      this.foundShipOrientation = Math.abs(this.foundShip.x - adjacent.x) > 0 ? "horizontal" : "vertical";
      if (this.foundShipOrientation === "horizontal") {
        this.optionPositive = {y: this.foundShip.y, x: Math.max(this.foundShip.x, adjacent.x) + 1};
        this.optionNegative = {y: this.foundShip.y, x: Math.min(this.foundShip.x, adjacent.x) - 1};
      } else {
        this.optionPositive = {y: Math.max(this.foundShip.y, adjacent.y) + 1, x: this.foundShip.x};
        this.optionNegative = {y: Math.min(this.foundShip.y, adjacent.y) - 1, x: this.foundShip.x};
      }
      return
    }
  }
  shootInLine(enemyBoard) {
    console.log("STATE 2: shooting in line");
    console.log("positive option")
    console.log(this.optionPositive);
    console.log("negative option")
    console.log(this.optionNegative)
    console.log(this.foundShipOrientation);
    let result;
    if (this.optionPositive !== null) {
      result = enemyBoard.receiveAttack(this.optionPositive.y, this.optionPositive.x);
      if (result === "shot cancelled") {
        this.optionPositive = null;
        this.shootInLine(enemyBoard);
        return;
      } else if (result === "hit") {
        this.optionPositive = this.foundShipOrientation === "horizontal" ?
          {y: this.optionPositive.y, x: this.optionPositive.x + 1} :
          {y: this.optionPositive.y + 1, x: this.optionPositive.x};
        return;
      } else if (result === "shot missed") {
        this.optionPositive = null;
        return;
      }
    }
    if (this.optionNegative !== null) {
      result = enemyBoard.receiveAttack(this.optionNegative.y, this.optionNegative.x);
      if (result === "shot cancelled") {
        this.optionNegative = null;
        this.shootInLine(enemyBoard);
        return;
      } else if (result === "hit") {
        this.optionNegative = this.foundShipOrientation === "horizontal" ?
          {y: this.optionNegative.y, x: this.optionNegative.x - 1} :
          {y: this.optionNegative.y - 1, x: this.optionNegative.x};
        return;
      } else if (result === "shot missed") {
        this.optionNegative = null;
        return;
      }
    }
    this.foundShip = null;
    this.foundShipOrientation = null;
    this.state = 0;
    this.takeTurn(enemyBoard);
  }
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

export default AI;