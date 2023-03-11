import createElem from "./create-element-custom-function";

const SIZE = 10;
const PREVIEW_SIZE = SIZE + 4;

const body = document.body;
const yourBoardContainer = createElem("div", {Class: "your-board-container"});
const playerBoard = createElem("div", {Class: "gameboard"});
const enemyBoard = createElem("div", {Class: "gameboard"});
const orientationSwitch = createElem("div", {Class: "orientation-switch"});
const randomPlacement = createElem("div", {Class: "random-button", Content: "Auto-placement"});
const previewBoard = [];
const previewBoardElem = createElem("div", {Class: "preview-board"});
const difficultyContainer = createElem("div", {Class: "difficulty-container"});
const difficulty = createElem("select", {Class: "difficulty"});
difficulty.innerHTML = `
<option value = "normal">normal</option>
<option value = "easy">easy</option>
`;
difficultyContainer.append(
  createElem("div", {Content: "Difficulty"}),
  difficulty
)

difficultyContainer.append(
  createElem("div", {Class: "selection-frame"}),
)

yourBoardContainer.append(playerBoard, previewBoardElem);

function buildPage() {
  body.append(
    yourBoardContainer,
    orientationSwitch,
    randomPlacement,
    difficultyContainer,
    enemyBoard
  )
  for (let i = 0; i < PREVIEW_SIZE; i++) {
    const line = [];
    previewBoard.push(line);
    for (let j = 0; j < PREVIEW_SIZE; j++) {
      const previewSquare = createElem("div", {Class: "preview-square"});
      if (i < 2 || i > 11 || j < 2 || j > 11) previewSquare.classList.add("problematic");
      line.push(previewSquare);
      previewBoardElem.appendChild(previewSquare);
    }
  }
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

function refreshBoard(board, whose, showShips = true) {
  const boardNodeList = (whose === "yours") ? playerBoard.children : enemyBoard.children;
  const hideShips = (whose === "yours") ? false : true;
  let i = 0;
  board.array.forEach(line => {
    line.forEach(square => {
      if (square.occupation !== "empty" && (showShips || square.checked)) {
        boardNodeList[i].classList.remove("water");
        boardNodeList[i].classList.add("ship");
      }
      if (square.checked) boardNodeList[i].classList.add("checked");
      i++;
    })
  })
}

function activatePreviewSquare(position) {
  previewBoard[position.y + 2][position.x + 2].classList.add("active");
}

function deactivatePreviewSquare(position) {
  previewBoard[position.y + 2][position.x + 2].classList.remove("active");
}

function deactivateAllPreviewSquares() {
  for (const square of previewBoardElem.children) {
    square.classList.remove("active");
  }
}

function markPreviewSquareProblematic(position) {
  previewBoard[position.y + 2][position.x + 2].classList.add("problematic");
}

export default {
  orientationSwitch,
  randomPlacement,
  playerBoard,
  enemyBoard,
  difficulty,
  buildPage,
  displayBoard,
  refreshBoard,
  activatePreviewSquare,
  deactivatePreviewSquare,
  deactivateAllPreviewSquares,
  markPreviewSquareProblematic
}