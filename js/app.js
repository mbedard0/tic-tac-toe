/*-------------------------------- Constants --------------------------------*/

// /*---------------------------- Variables (state) ----------------------------*/

let playerTurn, gameOver

// /*------------------------ Cached Element References ------------------------*/

// let gameStatus


let squares = document.querySelectorAll('.square');
let boardElement = document.getElementById('board')
// let newBoard = Array.prototype.slice.call(board)
// console.log(board[3])

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
  ]
}


// console.log(boardArr)
  //sets all squares to zero
  // playerTurn = 1
  //sets playerOne turn -> playerTurn = 1
  //sets gameOver to null -> let gameOver = null
// }

// gameOver = when 8 indexes do not have win condition met, or tie is declared

// while gameOver !== true, run handleClick()

function handleClick(evt) {
  let clicked = evt.target
  return clicked
}

function render() {
  if (playerTurn === 1) {
    squares[''].innerText = 'X';
    } else if (playerTurn === -1) {
    squares[''].innerText = 'O'
  }
  playerTurn = playerTurn * -1
}
//   })
//   if (playerTurn === 1) {
//     sqNum[idx].innerText = 'X'
//   }
//   if (playerTurn === -1) {
//     sqNum[idx].innerText = 'O'
//   }
// return playerTurn = playerTurn * -1
// }

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
