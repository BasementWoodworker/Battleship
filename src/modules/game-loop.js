import Player from "./player";
import AI from "./AI";
import Gameboard from "./gameboard";

const you = new Player(new Gameboard);
const enemy = new AI(new Gameboard);
const yourTurn = false;
