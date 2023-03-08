import createElem from "./create-element-custom-function";

const body = document.body;
const playerBoard = createElem("div", {Class: "gameboard"});
const enemyBoard = createElem("div", {Class: "gameboard"});

function buildPage() {
body.append(
  playerBoard,
  enemyBoard
)
}

function displayBoard(board) {

}

export default {
  buildPage,
  displayBoard
}