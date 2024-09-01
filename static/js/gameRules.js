
import { spaces } from './gameLogic.js';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function playerHasWon() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return combo;
    }
  }
  return false;
}

export function isDraw() {
  for (let i = 0; i < spaces.length; i++) {
    if (spaces[i] === null) return false;
  }
  return true;
}

export function addPointsToWinner() {
  
}
