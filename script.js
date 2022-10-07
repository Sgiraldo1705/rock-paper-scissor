let userScore = 0;
let computerScore = 0;
let roundWinner = '';

//GAME FUNCTION
function playRound(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    roundWinner = 'tie';
  }
  if (
    (userSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
    (userSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
    (userSelection == 'PAPER' && computerSelection == 'ROCK')
  ) {
    userScore++;
    roundWinner = 'player';
  }
  if (
    (computerSelection == 'ROCK' && userSelection == 'SCISSORS') ||
    (computerSelection == 'SCISSORS' && userSelection == 'PAPER') ||
    (computerSelection == 'PAPER' && userSelection == 'ROCK')
  ) {
    computerScore++;
    roundWinner = 'computer';
  }
}

//the computer need to random select ROCK PAPER or scissor
function getRandom() {
  let computerSelection = Math.floor(Math.random() * 3);
  switch (computerSelection) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}
function isGameOver() {
  return userScore === 5 || computerScore === 5;
}
// ELEMENT CALLING
const rockBtn = document.getElementById('rockBtn');
const scissorBtn = document.getElementById('scissorBtn');
const paperBtn = document.getElementById('paperBtn');
const userScoreData = document.getElementById('userScore');
const computerScoreData = document.getElementById('computerScore');

//EVENT LISTENERS
rockBtn.addEventListener('click', () => mouseLC('ROCK'));
scissorBtn.addEventListener('click', () => mouseLC('SCISSORS'));
paperBtn.addEventListener('click', () => mouseLC('PAPER'));

function mouseLC(userSelection) {
  if (isGameOver()) {
    alert('GAME OVER');
  }

  const compSelection = getRandom();
  playRound(userSelection, compSelection);
  updateScore();
}

function updateScore() {
  if (roundWinner === 'tie') {
    alert("it's a Tie!");
  } else if (roundWinner === 'player') {
    alert('YOU WIN!');
  } else if (roundWinner === 'computer') {
    alert('YOU LOST!');
  }
  userScoreData.textContent = `player: ${userScore}`;
  computerScoreData.textContent = `computer: ${computerScore}`;
}

//ENDS when either has 5 points
