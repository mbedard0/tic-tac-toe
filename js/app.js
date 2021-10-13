/*-------------------------------- Constants --------------------------------*/

// /*---------------------------- Variables (state) ----------------------------*/

let playerTurn = 1

// /*------------------------ Cached Element References ------------------------*/

// let gameStatus


let squares = document.querySelectorAll('.square');
let boardElement = document.getElementById('board')
let msgEl = document.querySelector('#msg')

// const xBtn = document.getElementById('xBtn')
// const oBtn = document.getElementById('oBtn')
let resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/

// xBtn.addEventListener('click', hide)
// oBtn.addEventListener('click', hide)

resetBtn.addEventListener('click', init)
boardElement.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  msgEl.innerText = 'Start the game by picking a square.';
  playerTurn = 1;
  board = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  render()
}


// gameOver = when 8 indexes do not have win condition met, or tie is declared

// while gameOver !== true, run handleClick()

function handleClick(evt) {
  board[parseInt(evt.target.id)] = playerTurn;
  playerTurn = playerTurn * -1;
  render()
}

function render() {
  squares.forEach((square, idx) => {
    if(board[idx] === 1) {
      square.innerText = 'X'
    } else if(board[idx] === -1) {
      square.innerText = 'O'
    } else {
      square.innerText = ''
    }
  })
  gameOver()
}

function gameOver() {
  console.log(gameOver)
}



// let oWins = function oWins() {
//   if (sum1 === -3, sum2 === -3, sum4 === -4, etc.) {
//     return true
//   }
// }

// function gameOver() {
//   if (oWins === true) {
//     startMsgEl.innerText = `O is the winner!`
//   } else if (sum1 === 3, sum2 === 3, sum4 === 4, etc.) {
//     startMsgEl.innerText = `X is the winner!`
//   }
// }


// function hide() {
//   document.getElementById('xBtn').hidden = true;
//   document.getElementById('oBtn').hidden = true;
// }

// function show() {
//   document.getElementById('xBtn').show = true;
//   document.getElementById('oBtn').show = true;
// }

// function win() 
// let win1 
// wins = 3 sqs in a row abs(sum) = 3

// function sumWinCndtns() {
  
// }

// function gameOver() {
//   if (abs(var) === 3) {
    
//   } else if (abs(all values on board) === 9) {

//   } else {
//     return
//   }
