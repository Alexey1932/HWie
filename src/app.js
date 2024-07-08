
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();


console.log(loadGame);
console.log(saveGame);
console.log(GameSavingData);