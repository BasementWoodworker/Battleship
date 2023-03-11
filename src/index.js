import "./style.css";
import DOM from "./modules/DOM";
import game from "./modules/game";
import Gameboard from "./modules/gameboard";

const placeholder = new Gameboard();

DOM.buildPage();
DOM.displayBoard(placeholder, "yours");
DOM.displayBoard(placeholder, "enemy's");

game.newGame();