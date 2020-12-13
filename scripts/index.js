function createBoard(height, width, mines) {
  let board = initializeBoard(height, width);
  let availablePositions = listAvailablePosition(height, width);
  for (let i = 0; i < mines; i++) {
    let selectedIndex = Math.floor(Math.random() * availablePositions.length);
    let position = availablePositions[selectedIndex];
    let [x, y] = position;
    availablePositions.splice(selectedIndex, 1);
    board = placeMine(board, x, y);
  }
  console.table(board);
}

function initializeBoard(height, width) {
  let board = [];
  for (let i = 0; i < height; i++) {
    board[i] = [];
    for (let j = 0; j < width; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

function placeMine(board, x, y) {
  board[x][y] = -1;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (board[x + i] == undefined || (board[x + i][y + j]) == undefined) continue;
      if (board[x + i][y + j] != -1) {
        board[x + i][y + j]++;
      }
    }
  }
  return board;
}

function listAvailablePosition(height, width) {
  let availablePositions = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i == 0 && j == 0) continue;
      availablePositions.push([i, j]);
    }
  }
  return availablePositions;
}

createBoard(16, 16, 1);

