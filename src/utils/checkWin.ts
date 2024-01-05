export function checkWin(board: Array<Array<number>>) {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {

        if (board[i][j] !== 0) {
          // check horizontal
          if (j < board[i].length - 3) {
            if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) {
              return board[i][j];
            }
          }

          // check vertical
          if (i < board.length - 3) {
            if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j]) {
              return board[i][j];
            }
          }

          // check diagonal
          if (i < board.length - 3 && j < board[i].length - 3) {
            if (board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2] && board[i][j] === board[i + 3][j + 3]) {
              return board[i][j];
            }
          }

          // check diagonal
          if (i < board.length - 3 && j > 2) {
            if (board[i][j] === board[i + 1][j - 1] && board[i][j] === board[i + 2][j - 2] && board[i][j] === board[i + 3][j - 3]) {
              return board[i][j];
            }
          }
        }
    }
  }

  return null;
}