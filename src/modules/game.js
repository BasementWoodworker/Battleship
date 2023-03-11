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
let yourShips = [];
let enemy;
let enemyBoard;
let enemyShips = [];
let winner;
let previousPreviewCoords = [];
let currentPreviewSquare;
const emptyGameboard = new Gameboard();
const placementSound = new Audio(require("../sounds/placed.wav"));
const hitSound = new Audio(require("../sounds/hit.wav"));
const missSound = new Audio(require("../sounds/miss.wav"));

window.addEventListener("click", gamePhaseHandler);

function gamePhaseHandler() {
  if (moveToNextPhase) {
    if (gamePhases[currentPhase].cleanup !== undefined) gamePhases[currentPhase].cleanup();
    currentPhase++;
    moveToNextPhase = false;
    gamePhases[currentPhase].start();
  }
}

function removeEventListeners(board) {
  board.forEach(square => square.replaceWith(square.cloneNode()));
}

function newGame() {
  DOM.randomPlacement.disabled = false;
  DOM.difficulty.disabled = false;
  DOM.newGame.disabled = true;
  you = new Player(new Gameboard);
  enemy = new AI(new Gameboard);
  enemy.reset();
  gamePhases[0].start();
}

// Phase 0
function placementPhase() {
  DOM.updateAnnouncer("Place your ships");
  // AI placement
  enemyShips = [
    new Ship(5),
    new Ship(4),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2)
  ];
  enemy.gameboard.placeAllRandomly(enemyShips);
  DOM.refreshBoard(enemy.gameboard, "enemy's", false);

  // Your placement
  yourShips = [
    new Ship(5),
    new Ship(4),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2)
  ];
  DOM.displayShipPreview(yourShips);
  // Placed them two there because javascript was executing faster than DOM elements managed to load
  yourBoard = [...DOM.playerBoard.children];
  enemyBoard = [...DOM.enemyBoard.children];
  yourBoard.forEach(square => square.addEventListener("click", (event) => {
    placeYourShip(event);
    if (yourShips.length === 0) moveToNextPhase = true;
  }))
  yourBoard.forEach(square => square.addEventListener("mouseover", (event) => {
    showPlacementPreview(event);
  }))
  yourBoard.forEach(square => square.addEventListener("mouseleave", (event) => {
    previousPreviewCoords.forEach(position => DOM.deactivatePreviewSquare(position));
    currentPreviewSquare = undefined;
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
    placementSound.currentTime = 0;
    placementSound.play();
    DOM.movePreviewBelt();
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
  previousPreviewCoords = coords;
  coords.forEach(position => DOM.activatePreviewSquare(position));
}

function placementPhaseCleanup() {
  removeEventListeners(yourBoard);
  DOM.deactivateAllPreviewSquares();
}

// Phase 1
function battlePhase() {
  DOM.updateAnnouncer("Battle Phase");
  DOM.toggleHideShipPreview();
  DOM.newGame.disabled = false;
  DOM.difficulty.disabled = true;
  DOM.randomPlacement.disabled = true;
  enemyBoard.forEach(square => square.addEventListener("click", (event) => {
    const y = Number (event.target.getAttribute("data-y"));
    const x = Number (event.target.getAttribute("data-x"));
    const yourShot = you.takeTurn(y, x, enemy.gameboard)
    if (yourShot === "shot cancelled") return;
    if (yourShot === "hit") {
      hitSound.currentTime = 0;
      hitSound.play();
    }
    else if (yourShot === "shot missed") {
      missSound.currentTime = 0;
      missSound.play();
    }
    DOM.refreshBoard(enemy.gameboard, "enemy's", false);
    if (!enemy.gameboard.shipsLeft()) {
      winner = "you";
      moveToNextPhase = true;
      // Return to prevent edge-case scenario where you destroy last enemy ship, and he destroys the last of yours too.
      return;
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
  DOM.refreshBoard(enemy.gameboard, "enemy's");
  if (winner === "you") DOM.updateAnnouncer("You won", "green");
  else if (winner === "enemy") DOM.updateAnnouncer("You lost", "red");
}

function finalCleanup() {
  currentPhase = 0;
  currentPreviewSquare = undefined;
  removeEventListeners(yourBoard);
  removeEventListeners(enemyBoard);
  DOM.toggleHideShipPreview();
  DOM.clearBoards();
  DOM.resetAllPreviewSquares();
  newGame();
}


// Rotation
DOM.orientationSwitch.textContent = orientation;
DOM.orientationSwitch.addEventListener("click", () => {
  orientation = (orientation === "horizontal") ? "vertical" : "horizontal";
  DOM.orientationSwitch.textContent = orientation;
  previousPreviewCoords.forEach(position => DOM.deactivatePreviewSquare(position));
  if (currentPreviewSquare !== undefined) showPlacementPreview(currentPreviewSquare);
})

window.addEventListener("keydown", (event) => {
  if (event.key === "r") DOM.orientationSwitch.click()
})

// Auto-placement
DOM.randomPlacement.addEventListener("click", () => {
  you.gameboard.placeAllRandomly(yourShips);
  DOM.refreshBoard(you.gameboard, "yours");
  moveToNextPhase = true;
})

// Difficulty
DOM.difficulty.addEventListener("change", (event) => enemy.difficulty = event.target.value);

// New Game button
DOM.newGame.addEventListener("click", finalCleanup);


export default {
  newGame
}