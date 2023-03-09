import createElem from "./create-element-custom-function";

const body = document.body;
const playerBoard = createElem("div", {Class: "gameboard"});
const enemyBoard = createElem("div", {Class: "gameboard"});
const orientationSwitch = createElem("div", {Class: "orientation-switch"});
const randomPlacement = createElem("div", {Class: "random-button", Content: "Place randomly"});

function buildPage() {
body.append(
  playerBoard,
  orientationSwitch,
  randomPlacement,
  enemyBoard
)
}

function displayBoard(board, whose) {
  const boardElem = (whose === "yours") ? playerBoard : enemyBoard;
  board.array.forEach(line => {
    line.forEach(square => {
      const newElem = createElem("div", {Class: "square"});
      if (square.occupation !== "empty") newElem.classList.add("ship");
      else newElem.classList.add("water");
      newElem.setAttribute("data-y", board.array.indexOf(line));
      newElem.setAttribute("data-x", line.indexOf(square));
      boardElem.appendChild(newElem);
    })
  })
}

function refreshBoard(board, whose) {
  const boardNodeList = (whose === "yours") ? playerBoard.children : enemyBoard.children;
  const hideShips = (whose === "yours") ? false : true;
  let i = 0;
  board.array.forEach(line => {
    line.forEach(square => {
      if (whose === "yours") {
        if (square.occupation !== "empty" || (whose !== "yours") && square.checked) {
          boardNodeList[i].classList.remove("water");
          boardNodeList[i].classList.add("ship");
        }
        if (square.checked) boardNodeList[i].classList.add("checked");
      } else {
        if (square.occupation !== "empty" && square.checked) {
          boardNodeList[i].classList.remove("water");
          boardNodeList[i].classList.add("ship");
        }
        if (square.checked) boardNodeList[i].classList.add("checked");
      }
      i++;
    })
  })
}

export default {
  orientationSwitch,
  randomPlacement,
  playerBoard,
  enemyBoard,
  buildPage,
  displayBoard,
  refreshBoard
}