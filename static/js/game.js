
import { startGame, restartGame, boxClicked } from './gameLogic.js';

startGame();

const restartBtn = document.getElementById("restartBtn");


export function showResult(winner) {
 
  if (winner === 'X') {
    window.location.href = 'result.html?winner=X';
  } else if (winner === 'O') {
    window.location.href = 'result.html?winner=O';
  } else {
    window.location.href = 'result.html?winner=draw';
  }
}

