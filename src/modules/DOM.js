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

function displayBoard(board, whose) {
  const boardElem = (whose === "yours") ? playerBoard : enemyBoard;
  const hideShips = (whose === "yours") ? false : true;
  board.array.forEach(line => {
    line.forEach(square => {
      const newElem = createElem("div", {Class: "square"});
      if (square.occupation !== "empty" && !hideShips) newElem.classList.add("ship");
      else newElem.classList.add("water");
      boardElem.appendChild(newElem);
    })
  })
}

export default {
  buildPage,
  displayBoard
}