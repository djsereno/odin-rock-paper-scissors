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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let playerSelection = this.innerText.toLowerCase();
    let computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);

    console.log("--------------------------------------------");
    console.log(
      "Player: " +
        playerSelection.toUpperCase() +
        ", Computer: " +
        computerSelection.toUpperCase()
    );
    console.log(results.message);
  });
});
