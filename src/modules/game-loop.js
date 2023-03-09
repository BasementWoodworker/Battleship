import Player from "./player";
import AI from "./AI";
import Gameboard from "./gameboard";
import Ship from "./ships";
import DOM from "./DOM";

const gamePhases = [
  placementPhase,
  battlePhase
];
let currentPhase = 0;
let moveToNextPhase = false;
let orientation = "horizontal";
let you;
let yourShips = [];
let enemy;
let enemyShips = [];
let yourTurn = false;

window.addEventListener("click", gamePhaseHandler);

function gamePhaseHandler() {
  if (moveToNextPhase) {
    currentPhase++;
    moveToNextPhase = false;
    gamePhases[currentPhase]();
  }
}

function newGame() {
  you = new Player(new Gameboard);
  enemy = new AI(new Gameboard);
  gamePhases[0]();
}

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
  const yourBoard = [...DOM.playerBoard.children]
  yourBoard.forEach(square => square.addEventListener("click", (event) => {
      placeYourShip(event);
      if (yourShips.length === 0) {
        // Removing all event listeners
        yourBoard.forEach(square => square.replaceWith(square.cloneNode()));
        moveToNextPhase = true;
      }
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

function battlePhase() {
  console.log("battle")
  const enemyBoard = [...DOM.enemyBoard.children]
  enemyBoard.forEach(square => square.addEventListener("click", (event) => {
    const y = Number (event.target.getAttribute("data-y"));
    const x = Number (event.target.getAttribute("data-x"));
    you.takeTurn(y, x, enemy.gameboard);
    DOM.refreshBoard(enemy.gameboard, "enemy's");
    enemy.takeTurn(you.gameboard);
    DOM.refreshBoard(you.gameboard, "yours");
  }))
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