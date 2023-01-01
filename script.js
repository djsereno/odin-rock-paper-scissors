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
  let playerWin;
  let message;

  if (playerSelection == computerSelection) {
    playerWin = -1;
    message = 'Tie. Rematch!';
  } else {
    switch (playerSelection) {
      case 'rock':
        if (computerSelection == 'paper') {
          playerWin = 0;
          message = 'You Lose! Paper beats Rock';
        } else {
          playerWin = 1;
          message = 'You Win! Rock beats Scissors';
        }
        break;
      case 'paper':
        if (computerSelection == 'scissors') {
          playerWin = 0;
          message = 'You Lose! Scissors beats Paper';
        } else {
          playerWin = 1;
          message = 'You Win! Paper beats Rock';
        }
        break;
      case 'scissors':
        if (computerSelection == 'rock') {
          playerWin = 0;
          message = 'You Lose! Rock beats Scissors';
        } else {
          playerWin = 1;
          message = 'You Win! Scissors beats Paper';
        }
        break;
    }
  }

  return {
    playerWin: playerWin,
    message: message,
  };
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  console.log('ROCK, PAPER, SCISSORS: Best of 5');
  console.log('--------------------------------------------');

  let game = 0;
  while (game < 5) {
    // Get player selection
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
    console.log(results.message);

    // Rematch if a tie game occurs
    if (results.playerWin >= 0) {
      game += 1;
      playerScore += results.playerWin;
      computerScore = game - playerScore;
    }

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
