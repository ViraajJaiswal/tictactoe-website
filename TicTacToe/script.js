let board= [
    ['','',''],
    ['','',''],
    ['','','']
]

let player = 'X'
let gameOver = false

window.onload = function() {
    let cells = document.getElementsByClassName('grid-item');
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function() {
        if (!gameOver && this.innerHTML === '') {

          let row = this.dataset.row
          let col = this.dataset.col
          board[row][col] = player
          this.innerHTML = player

          checkWin()

          player = (player === 'X') ? 'O' : 'X'
        }
      })
    }
}

function checkWin() {

    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          gameOver = true;
          alert('Player ' + player + ' wins!');
          break;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
          gameOver = true;
          alert('Player ' + player + ' wins!');
          break;
        }
    }

    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        gameOver = true;
        alert('Player ' + player + ' wins!');
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        gameOver = true;
        alert('Player ' + player + ' wins!');
    }

    let tie = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
            tie = false;
            break;
            }
        }   
        if (!tie) {
            break;
        }
    }
    if (tie) {
        gameOver = true;
        alert('It\'s a tie!');
    }
}
