import "./style.css";
import DOM from "./modules/DOM";
import gameLoop from "./modules/game-loop";
import Gameboard from "./modules/gameboard";

const placeholder = new Gameboard();

DOM.buildPage();
DOM.displayBoard(placeholder, "yours");
DOM.displayBoard(placeholder, "enemy's");

gameLoop.newGame();