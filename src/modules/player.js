class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  takeTurn(y, x, enemyBoard) {
    enemyBoard.receiveAttack(y, x);
  }
}

export default Player;