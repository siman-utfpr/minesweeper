function createBoard(height, width, mines) {
  let board = initializeBoard(height, width);
  let minesPlaced = 0;
  while (minesPlaced != mines) {
    let x = Math.floor(Math.random() * height);
    let y = Math.floor(Math.random() * width);
    if ((x != 0 && y != 0) && (board[x][y]) == 0) {
      board = placeMine(board, x, y);
      minesPlaced++;
    }
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

createBoard(16, 30, 30);

