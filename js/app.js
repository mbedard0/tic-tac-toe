/*-------------------------------- Constants --------------------------------*/

// /*---------------------------- Variables (state) ----------------------------*/

let playerTurn = 1

// /*------------------------ Cached Element References ------------------------*/

// let gameStatus


let squares = document.querySelectorAll('.square');
let boardElement = document.getElementById('board')
let msgEl = document.querySelector('#msg')
let startMsg = document.querySelector('#startMsg')
let resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/

resetBtn.addEventListener('click', init)
boardElement.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  playerTurn = 1;
  board = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  startMsg.innerText = `Start the game by picking a square.`
  render()
}

function handleClick(evt) {
  startMsg.innerText = '';
  let idx = parseInt(evt.target.id);
  if (board[idx] === 1 || board[idx] === -1) {
    startMsg.innerText = `That square's already been picked!`
  } else {
    board[parseInt(evt.target.id)] = playerTurn;
    playerTurn = playerTurn * -1;
    render()
  }
}

function render() {
  squares.forEach((square, idx) => {
    if (board[idx] === 1) {
      square.innerText = 'X';
    } else if (board[idx] === -1) {
      square.innerText = 'O';
    } else {
      square.innerText = ''
    }
  })
  if (playerTurn === 1) {
    msgEl.innerText = `It's X's turn now.`
  } else if (playerTurn === -1) {
    msgEl.innerText = `It's O's turn`
  }
  gameOver()
}

function gameOver() {
  if ((board[0] + board[1] + board[2] === 3) ||
    (board[3] + board[4] + board[5] === 3) ||
    (board[6] + board[7] + board[8] === 3) ||
    (board[0] + board[3] + board[6] === 3) ||
    (board[1] + board[4] + board[7] === 3) ||
    (board[2] + board[5] + board[8] === 3) ||
    (board[0] + board[4] + board[8] === 3) ||
    (board[2] + board[4] + board[6] === 3)) {
    startMsg.innerText = 'X is the winner!';
    msgEl.innerText = 'Would you like to play again?'
  } else if ((board[0] + board[1] + board[2] === -3) ||
    (board[3] + board[4] + board[5] === -3) ||
    (board[6] + board[7] + board[8] === -3) ||
    (board[0] + board[3] + board[6] === -3) ||
    (board[1] + board[4] + board[7] === -3) ||
    (board[2] + board[5] + board[8] === -3) ||
    (board[0] + board[4] + board[8] === -3) ||
    (board[2] + board[4] + board[6] === -3)) {
    startMsg.innerText = 'O is the winner!';
    msgEl.innerText = 'Would you like to play again?'
  } else if (board.includes(null)) {
    return
  } else {
    startMsg.innerText = `It's a tie!`;
    msgEl.innerText = 'Would you like to play again?'
  }
}
