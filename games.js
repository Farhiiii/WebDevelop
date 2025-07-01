const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const modeToggle = document.getElementById("modeToggle");

let board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Night Mode";
});

function handleCellClick(idx) {
  if (!gameActive || board[idx] !== "") return;
  board[idx] = currentPlayer;
  updateBoard();
  if (checkWin()) {
    statusElement.textContent = `🎉 ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (board.every(c => c)) {
    statusElement.textContent = `🤝 Draw!`;
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.textContent = `Turn: ${currentPlayer}`;
  }
}

function updateBoard() {
  boardElement.innerHTML = "";
  board.forEach((val, idx) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    if (val) cell.classList.add(val.toLowerCase());
    cell.textContent = val;
    cell.addEventListener("click", () => handleCellClick(idx));
    boardElement.appendChild(cell);
  });
}

function checkWin() {
  return winConditions.some(([a,b,c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function restartGame() {
  board.fill("");
  currentPlayer = "X";
  gameActive = true;
  statusElement.textContent = `Turn: ${currentPlayer}`;
  updateBoard();
}

updateBoard();
