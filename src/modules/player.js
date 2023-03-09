class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  takeTurn(y, x, enemyBoard) {
    enemyBoard.receiveAttack(y, x);
  }
  checkLoss() {
    if (this.gameboard.ships.length === 0) return true;
  }
}

export default Player;