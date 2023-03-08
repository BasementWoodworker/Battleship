import "./style.css";
import DOM from "./modules/DOM";
import Gameboard from "./modules/gameboard";
import Ship from "./modules/ships";

const a = new Gameboard();
const s = new Ship(3);

console.log(a.placeShip(s, 5, 5, "vertical"));
console.log(a.placeShip(s, 2, 1, "horizontal"));
console.log(a);

DOM.buildPage();
DOM.displayBoard(a, "yours");