console.log("WELCOME TO ROCK-PAPER-SCISSORS");

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let random = options[Math.floor(Math.random() * options.length)];
  return random;
}

function getHumanChoice() {
  let choice = prompt("rock, paper or scissors?");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  humanChoice = getHumanChoice();
  console.log(humanChoice);

  if (computerChoice === humanChoice) {
    console.log("Tie");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    console.log("Rock breaks Scissors, The Machine WINS");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    console.log("Paper covers Rock, The Machine WINS");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    console.log("Scissors cuts Paper, The Machine WINS");
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    console.log("Rock breaks Scissors, The Human WINS");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    console.log("Paper covers Rock, The Human WINS");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    console.log("Scissors cuts Paper, The Human WINS");
  } else {
    console.log("Dare I say Redpilled, You broke the MATRIX");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Human Score ${humanScore} : ${computerScore} Computer Score`);
}

playGame();
