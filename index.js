function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let random = options[Math.floor(Math.random() * options.length)];
  return random;
}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const maxRounds = 5;
let resetButton;

const scoreBoard = document.getElementById("scoreBoard");
const resultDiv = document.getElementById("result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const buttonsDiv = document.querySelector(".buttons");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function playRound(humanChoice) {
  if (roundCounter >= maxRounds) {
    return;
  }

  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (computerChoice === humanChoice) {
    resultMessage = "Tie";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    resultMessage = `The machine WINS ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    resultMessage = `The human WINS ${humanChoice} beats ${computerChoice}`;
  }

  roundCounter++;

  scoreBoard.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
  resultDiv.textContent = resultMessage;

  if (roundCounter >= maxRounds) {
    const finalResult =
      humanScore > computerScore
        ? "Human wins the game!"
        : humanScore < computerScore
          ? "Machine wins the game!"
          : "The game is a Tie!";
    resultDiv.textContent = finalResult;

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    resetButton = document.createElement("button");
    resetButton.textContent = "RESET";
    resetButton.id = "reset";
    resetButton.addEventListener("click", resetGame);
    buttonsDiv.appendChild(resetButton);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCounter = 0;
  scoreBoard.textContent = `Human: 0 - Computer: 0`;
  resultDiv.textContent = "Make your choice";

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;

  buttonsDiv.removeChild(resetButton);
}
