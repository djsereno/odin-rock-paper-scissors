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
  if (playerSelection == computerSelection) {
    return [-1, 'Tie!'];
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection == 'paper') {
        return [0, 'You Lose! Paper beats Rock'];
      } else {
        return [1, 'You Win! Rock beats Scissors'];
      }
    case 'paper':
      if (computerSelection == 'scissors') {
        return [0, 'You Lose! Scissors beats Paper'];
      } else {
        return [1, 'You Win! Paper beats Rock'];
      }
    case 'scissors':
      if (computerSelection == 'rock') {
        return [0, 'You Lose! Rock beats Scissors'];
      } else {
        return [1, 'You Win! Scissors beats Paper'];
      }
  }
}

function game() {
  let playerScore = 0;

  // Get player selection
  for (let i = 0; i < 5; i++) {
    let playerSelection;
    while (
      playerSelection != 'rock' &&
      playerSelection != 'paper' &&
      playerSelection != 'scissors'
    ) {
      playerSelection = prompt('Input your selection: ').toLowerCase();
    }

    // Get computer selection
    computerSelection = getComputerChoice();
    console.log(
      'Player: ' +
        playerSelection.toUpperCase() +
        ', Computer: ' +
        computerSelection.toUpperCase()
    );

    // Display game results
    let results = playRound(playerSelection, computerSelection);
    console.log(results[1]);

    if (results[0] == -1) {
      i -= 1;
    } else {
      playerScore += results[0];
    }
    computerScore = i + 1 - playerScore;

    console.log('Player: ' + playerScore + ', Computer: ' + computerScore);
    console.log('--------------------------------------------');

    // Check if game is over
    if (playerScore > 2) {
      console.log('GAME OVER: You win! Great job!');
      break;
    } else if (computerScore > 2) {
      console.log('GAME OVER: You lose! Better luck next time!');
      break;
    }
  }
}

game();
