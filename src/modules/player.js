class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }
  takeTurn(y, x, enemyBoard) {
    return enemyBoard.receiveAttack(y, x);
  }
}

export default Player;