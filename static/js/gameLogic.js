
import { showResult } from './game.js';

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
export let spaces = Array(9).fill(null);
const boxes = Array.from(document.getElementsByClassName("box"));
const playerText = document.getElementById("playerText");
const xPointsText = document.getElementById("x-points");
const oPointsText = document.getElementById("o-points");
const winningIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks");


export const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function startGame() {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
}

export function restartGame() {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });

  playerText.innerText = "JOGO DA VELHA";
  currentPlayer = X_TEXT;
}

export function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id] && !playerHasWon()) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
      playerText.innerText = `${currentPlayer} Ganhou!`;
      const winningBlocks = playerHasWon();
      winningBlocks.forEach((box) => (boxes[box].style.backgroundColor = winningIndicator));
      addPointsToWinner();
      showResult(currentPlayer);
    } else if (isDraw()) {
      playerText.innerText = "Empate!";
      showResult(null);
    }

    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
  }
}

export function playerHasWon() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return combo;
    }
  }
  return false; 
}

export function isDraw() {
  return spaces.every((space) => space !== null);
}

export function addPointsToWinner() {
  if (currentPlayer === X_TEXT) {
    xPointsText.innerText = Number(xPointsText.innerText) + 1;
  } else {
    oPointsText.innerText = Number(oPointsText.innerText) + 1;
  }
}
