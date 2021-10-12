/*-------------------------------- Constants --------------------------------*/

// /*---------------------------- Variables (state) ----------------------------*/
const boardArr = [
  ['sq0', 'sq1', 'sq2'],
  ['sq3', 'sq4', 'sq5'],
  ['sq6', 'sq7', 'sq8']
]

let playerTurn, gameOver

// /*------------------------ Cached Element References ------------------------*/

// let gameStatus

const sq0 = document.querySelector('#sq0');
const sq1 = document.querySelector('#sq1');
const sq2 = document.querySelector('#sq2');
const sq3 = document.querySelector('#sq3');
const sq4 = document.querySelector('#sq4');
const sq5 = document.querySelector('#sq5');
const sq6 = document.querySelector('#sq6');
const sq7 = document.querySelector('#sq7');
const sq8 = document.querySelector('#sq8');

const board = document.querySelector('.board');
console.log(board)

let msgEl = document.querySelector('#msg')


// const xBtn = document.getElementById('xBtn')
// const oBtn = document.getElementById('oBtn')
// const msgEl = document.getElementById('#msg')
const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/

// xBtn.addEventListener('click', hide)
// oBtn.addEventListener('click', hide)

// resetBtn.addEventListener('reset', init)

// sq0.addEventListener('click', handleClick(evt))

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  msgEl.innerText = 'Start the game by picking a square.';
  playerTurn = 1;
}

  // console.log(boardArr)
  //sets all squares to zero
  // playerTurn = 1
  //sets playerOne turn -> playerTurn = 1
  //sets gameOver to null -> let gameOver = null
// }

// sq0.onclick = function() {
//   sq0.innerText = 'X';
// }

sq1.onclick = function() {
  sq1.innerText = 'O';
}

// gameOver = when 8 indexes do not have win condition met, or tie is declared

// while gameOver !== true, run handleClick()

// function handleClick(evt) {
//   if ()
//     const clicked = sq0.innerText = 'X';
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
