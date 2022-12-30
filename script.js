function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return 'Tie!';
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
      } else {
        return 'You Win! Rock beats Scissors';
      }
    case 'paper':
      if (computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
      } else {
        return 'You Win! Paper beats Rock';
      }
    case 'scissors':
      if (computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
      } else {
        return 'You Win! Scissors beats Paper';
      }
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log('Player: ' + playerSelection);
console.log('Computer: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
