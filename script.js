const choiceButtons = document.querySelectorAll("button.choice");
const selectionsText = document.querySelector("p.selections");
const roundResultsText = document.querySelector("p.round-results");
const scoresText = document.querySelector("p.scores");
const gameResultsText = document.querySelector("p.game-results");
const resultsContainer = document.querySelector("div.results-container");
const newGameButton = document.querySelector("button.new-game");

const playerScoreText = document.querySelector("span.player-score");
const computerScoreText = document.querySelector("span.computer-score");
const playerChoiceText = document.querySelector("span.player-choice");
const computerChoiceText = document.querySelector("span.computer-choice");

let playerScore;
let computerScore;
let roundNumber;
let gameActive;

initGame();
choiceButtons.forEach((button) => {
  button.addEventListener("click", function () {
    playGame(this.innerText.toLowerCase());
  });
});
newGameButton.addEventListener("click", initGame);

// Initializes game values to zero and removes screen text as necessary
function initGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  gameActive = true;
  playerScoreText.innerText = playerScore;
  computerScoreText.innerText = computerScore;
  selectionsText.style.display = "none";
  roundResultsText.style.display = "none";
  gameResultsText.style.display = "none";
  newGameButton.style.display = "none";
}

// Manages score keeping and updates screen output
function playGame(playerSelection) {
  if (gameActive) {
    let computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);

    if (roundNumber === 0) {
      selectionsText.style.display = "block";
      roundResultsText.style.display = "block";
    }

    // Round only ends on non-tie. Rematch if a tie game occurs.
    if (results.playerWin >= 0) {
      roundNumber += 1;
      playerScore += results.playerWin;
      computerScore = roundNumber - playerScore;
    }

    // Update output
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    playerChoiceText.innerText = playerSelection.toUpperCase();
    computerChoiceText.innerText = computerSelection.toUpperCase();
    roundResultsText.innerText = results.message;

    // End game as necessary
    if (playerScore > 2) {
      endGame(true);
    } else if (computerScore > 2) {
      endGame(false);
    }
  }
}

// Plays one full round and returns the outcome
function playRound(playerSelection, computerSelection) {
  let playerWin;
  let message;

  if (playerSelection == computerSelection) {
    playerWin = -1;
    message = "Tie. Rematch!";
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "paper") {
          playerWin = 0;
          message = "You Lose! Paper beats Rock";
        } else {
          playerWin = 1;
          message = "You Win! Rock beats Scissors";
        }
        break;
      case "paper":
        if (computerSelection == "scissors") {
          playerWin = 0;
          message = "You Lose! Scissors beats Paper";
        } else {
          playerWin = 1;
          message = "You Win! Paper beats Rock";
        }
        break;
      case "scissors":
        if (computerSelection == "rock") {
          playerWin = 0;
          message = "You Lose! Rock beats Scissors";
        } else {
          playerWin = 1;
          message = "You Win! Scissors beats Paper";
        }
        break;
    }
  }

  return {
    playerWin: playerWin,
    message: message,
  };
}

// Returns a random computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Ends the game, updates screen text, and prompts for new game
function endGame(playerWin) {
  gameActive = false;
  if (playerWin) {
    gameResultsText.innerText = "GAME OVER: You win! Great job!";
    newGameButton.innerText = "Play Again?";
  } else {
    gameResultsText.innerText = "GAME OVER: You lose! Better luck next time!";
    newGameButton.innerText = "Try Again?";
  }
  gameResultsText.style.display = "block";
  newGameButton.style.display = "block";
}
