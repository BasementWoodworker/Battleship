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
  gamePhases[0].start();
}

// Phase 1
function placementPhase() {
  // AI placement
  enemyShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3)
  ];
  enemy.gameboard.placeAllRandomly(enemyShips);
  DOM.refreshBoard(enemy.gameboard, "enemy's");

  // Your placement
  yourShips = [
    new Ship(5),
    new Ship(4),
    new Ship(3)
  ];
  yourBoard = [...DOM.playerBoard.children]
  yourBoard.forEach(square => square.addEventListener("click", (event) => {
    placeYourShip(event);
    if (yourShips.length === 0) moveToNextPhase = true;
  }))
  yourBoard.forEach(square => square.addEventListener("hover", (event) => {

  }))
}

function placeYourShip(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips.shift();
  const result = you.gameboard.placeShip(ship, y, x, orientation);
  if (result === "Placement cancelled") yourShips.unshift(ship);
  DOM.refreshBoard(you.gameboard, "yours");
}

function placementPreview(event) {
  const y = Number (event.target.getAttribute("data-y"));
  const x = Number (event.target.getAttribute("data-x"));
  const ship = yourShips.shift();
  const result = you.gameboard.preview(ship, y, x, orientation);
}

function placementPhaseCleanup() {
  removeEventListeners(yourBoard);
}

// Phase 2
function battlePhase() {
  console.log("battle")
  enemyBoard = [...DOM.enemyBoard.children]
  enemyBoard.forEach(square => square.addEventListener("click", (event) => {
    const y = Number (event.target.getAttribute("data-y"));
    const x = Number (event.target.getAttribute("data-x"));
    if (you.takeTurn(y, x, enemy.gameboard) === "has already been shot") return;
    DOM.refreshBoard(enemy.gameboard, "enemy's");
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

// Phase 3
function gameEnd() {
  if (winner === "you") alert("You won");
  else if (winner === "enemy") alert("You lost");
}

function removeEventListeners(board) {
  board.forEach(square => square.replaceWith(square.cloneNode()));
}


DOM.orientationSwitch.textContent = orientation;
DOM.orientationSwitch.addEventListener("click", () => {
  orientation = (orientation === "horizontal") ? "vertical" : "horizontal";
  DOM.orientationSwitch.textContent = orientation;
})

DOM.randomPlacement.addEventListener("click", function handler() {
  you.gameboard.placeAllRandomly(yourShips);
  DOM.refreshBoard(you.gameboard, "yours");
  moveToNextPhase = true;
  DOM.randomPlacement.removeEventListener("click", handler);
})

export default {
  newGame
}