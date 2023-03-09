class AI {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  takeTurn(enemyBoard) {
    while (true) {
      const y = Math.floor(Math.random()*10);
      const x = Math.floor(Math.random()*10);
      if (enemyBoard.receiveAttack(y, x) !== "has already been shot") break;
    }
  }
  checkLoss() {
    if (this.gameboard.ships.length === 0) return true;
  }
}

export default AI;