import Player from "./player";
import AI from "./AI";
import Gameboard from "./gameboard";
import Ship from "./ships";
import DOM from "./DOM";

const gamePhases = [
  {
  start: placementPhase,
  cleanup: placementPhaseCleanup
  },
  {
  start: battlePhase,
  cleanup: battlePhaseCleanup
  },
  {
  start: gameEnd
  }
];
let currentPhase = 0;
let moveToNextPhase = false;
let orientation = "horizontal";
let you;
let yourBoard;
let yourShips = []; // !Might be redundant!
let enemy;
let enemyBoard;
let enemyShips = [];
let winner;
let previousPreviewCoords = [];
let currentPreviewSquare;

window.addEventListener("click", gamePhaseHandler);

function gamePhaseHandler() {
  if (moveToNextPhase) {
    if (gamePhases[currentPhase].cleanup !== undefined) gamePhases[currentPhase].cleanup();
    currentPhase++;
    moveToNextPhase = false;
    gamePhases[currentPhase].start();
  }
}

function newGame() {
  you = new Player(new Gameboard);
  enemy = new AI(new Gameboard);
  enemy.reset();
  gamePhases[0].start();
}

// Phase 0
function placementPhase() {
  // AI placement
  enemyShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(5),
    new Ship(4),
    new Ship(3)
  ];
  enemy.gameboard.placeAllRandomly(enemyShips);
  DOM.refreshBoard(enemy.gameboard, "enemy's", false);

  // Your placement
  yourShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(5),
    new Ship(4),
    new Ship(3)
  ];
  yourBoard = [...DOM.playerBoard.children]
  yourBoard.forEach(square => square.addEventListener("click", (event) => {
    placeYourShip(event);
    if (yourShips.length === 0) moveToNextPhase = true;
  }))
  yourBoard.forEach(square => square.addEventListener("mouseover", (event) => {
    showPlacementPreview(event);
  }))
}

function placeYourShip(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips.shift();
  const result = you.gameboard.placeShip(ship, y, x, orientation);
  if (result === "Placement cancelled") {
    yourShips.unshift(ship);
    return;
  } else {
  DOM.refreshBoard(you.gameboard, "yours");
  previousPreviewCoords.forEach(position => {
    DOM.deactivatePreviewSquare(position);
    DOM.markPreviewSquareProblematic(position);
  });
  }
}

function showPlacementPreview(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips[0];
  if (ship === undefined) return;
  currentPreviewSquare = event;
  const coords = you.gameboard.getPlacementCoordinates(ship, y, x, orientation);
  previousPreviewCoords.forEach(position => DOM.deactivatePreviewSquare(position));
  previousPreviewCoords = coords;
  coords.forEach(position => DOM.activatePreviewSquare(position));
}

function placementPhaseCleanup() {
  removeEventListeners(yourBoard);
  DOM.deactivateAllPreviewSquares();
}

// Phase 1
function battlePhase() {
  console.log("battle")
  DOM.difficulty.disabled = true;
  enemyBoard = [...DOM.enemyBoard.children]
  enemyBoard.forEach(square => square.addEventListener("click", (event) => {
    const y = Number (event.target.getAttribute("data-y"));
    const x = Number (event.target.getAttribute("data-x"));
    if (you.takeTurn(y, x, enemy.gameboard) === "shot cancelled") return;
    DOM.refreshBoard(enemy.gameboard, "enemy's", false);
    if (!enemy.gameboard.shipsLeft()) {
      winner = "you";
      moveToNextPhase = true;
    }
    enemy.takeTurn(you.gameboard);
    DOM.refreshBoard(you.gameboard, "yours");
    if (!you.gameboard.shipsLeft()) {
      winner = "enemy";
      moveToNextPhase = true;
    }
  }))
}

function battlePhaseCleanup() {
  removeEventListeners(enemyBoard);
}

// Phase 2
function gameEnd() {
  DOM.difficulty.disabled = false;
  DOM.refreshBoard(enemy.gameboard, "enemy's");
  if (winner === "you") alert("You won");
  else if (winner === "enemy") alert("You lost");
}

function removeEventListeners(board) {
  board.forEach(square => square.replaceWith(square.cloneNode()));
}

// Rotation
DOM.orientationSwitch.textContent = orientation;
DOM.orientationSwitch.addEventListener("click", () => {
  orientation = (orientation === "horizontal") ? "vertical" : "horizontal";
  DOM.orientationSwitch.textContent = orientation;
  if (currentPreviewSquare !== undefined) showPlacementPreview(currentPreviewSquare);
})

window.addEventListener("keydown", (event) => {
  if (event.key === "r") DOM.orientationSwitch.click()
  if (currentPreviewSquare !== undefined) showPlacementPreview(currentPreviewSquare);
})

// Auto-placement
DOM.randomPlacement.addEventListener("click", function handler() {
  you.gameboard.placeAllRandomly(yourShips);
  DOM.refreshBoard(you.gameboard, "yours");
  moveToNextPhase = true;
  DOM.randomPlacement.removeEventListener("click", handler);
})

// Difficulty
DOM.difficulty.addEventListener("change", (event) => enemy.difficulty = event.target.value);



export default {
  newGame
}