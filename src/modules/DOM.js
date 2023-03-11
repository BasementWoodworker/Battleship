import createElem from "./create-element-custom-function";

const SIZE = 10;
const PREVIEW_SIZE = SIZE + 4;

const body = document.body;
const announcer = createElem("div", {Class: "announcer"});
const yourBoardContainer = createElem("div", {Class: "your-board-container"});
const playerBoard = createElem("div", {Class: "gameboard"});
playerBoard.classList.add("player");
const enemyBoard = createElem("div", {Class: "gameboard"});
enemyBoard.classList.add("enemy");
const previewBoard = [];
const previewBoardElem = createElem("div", {Class: "preview-board"});
const utilities = createElem("div", {Class: "utilities"});
const orientationSwitch = createElem("div", {Class: "orientation-switch"});
const randomPlacement = createElem("button", {Class: "random-button", Content: "Auto-placement"});
const newGame = createElem("button", {Class: "new-game", Content: "restart"});
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
utilities.append(
  announcer,
  difficultyContainer,
  orientationSwitch,
  randomPlacement,
  newGame
)

yourBoardContainer.append(playerBoard, previewBoardElem);

function buildPage() {
  body.append(
    yourBoardContainer,
    utilities,
    enemyBoard
  )
  for (let i = 0; i < PREVIEW_SIZE; i++) {
    const line = [];
    previewBoard.push(line);
    for (let j = 0; j < PREVIEW_SIZE; j++) {
      const previewSquare = createElem("div", {Class: "preview-square"});
      if (i < 2 || i > 11 || j < 2 || j > 11) previewSquare.classList.add("problematic");
      else previewSquare.classList.add("resettable");
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

function clearBoards() {
  for (let i = 0; i < SIZE * SIZE; i++) {
    playerBoard.children[i].classList.remove("ship", "checked")
    playerBoard.children[i].classList.add("water");
    enemyBoard.children[i].classList.remove("ship", "checked")
    enemyBoard.children[i].classList.add("water");
  }
}

// Preview
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
function resetAllPreviewSquares() {
  for (const square of previewBoardElem.children) {
    if (square.classList.contains("resettable")) square.classList.remove("problematic");
  }
}

function updateAnnouncer(message, color = "black") {
  announcer.textContent = message;
  announcer.style.color = color;
}

export default {
  playerBoard,
  enemyBoard,
  orientationSwitch,
  randomPlacement,
  difficulty,
  newGame,
  buildPage,
  displayBoard,
  refreshBoard,
  clearBoards,
  activatePreviewSquare,
  deactivatePreviewSquare,
  deactivateAllPreviewSquares,
  resetAllPreviewSquares,
  markPreviewSquareProblematic,
  updateAnnouncer
}