/*-------------------------------- Constants --------------------------------*/

// let win1 
// // wins = 3 sqs in a row abs(sum) = 3

// const startMessage = document.getElementById('#startMessage')

// /*---------------------------- Variables (state) ----------------------------*/

// let playerTurn, gameOver

// /*------------------------ Cached Element References ------------------------*/

// let gameStatus

// const board = [
//   '#sq0', '#sq1', '#sq2',
//   '#sq3', '#sq4', '#sq5',
//   '#sq6', '#sq7', '#sq8'
// ]

// const xBtn = document.getElementById('xBtn')
// const oBtn = document.getElementById('oBtn')
// const resetBtn = document.getElementById('resetBtn')


/*----------------------------- Event Listeners -----------------------------*/

xBtn.addEventListener('click', hide)
oBtn.addEventListener('click', hide)

/*-------------------------------- Functions --------------------------------*/

// init()

// function render() {}


// function handleClick(){}

// function init() {

// }

function hide() {
  document.getElementById('xBtn').hidden = true;
  document.getElementById('oBtn').hidden = true;
}