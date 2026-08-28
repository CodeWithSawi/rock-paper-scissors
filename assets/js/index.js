/* Initialize userScore = 0
Initialize computerScore = 0

WHEN user clicks a move button:
    userChoice = the move on the button
    computerChoice = pick random choices from ["rock", "paper", "scissors"]
    
    IF userChoice equals computerChoice:
        result = "It's a tie!"
    ELSE IF userChoice beats computerChoice:
        result = "You win!"
        increment userScore by 1
    ELSE:
        result = "You lose!"
        increment computerScore by 1
        
    UPDATE HTML text for result
    // UPDATE HTML text for scores 

*/

// select dom elements
let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userEl = document.getElementById("user");
let compEl = document.getElementById("computer");

// declare global variables
let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

// now i need to get the random index of the choices so that the cp will be able to choose
const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const updateScores = () => {
  userEl.textContent = `User Score: ${userScore}`;
  compEl.textContent = `Computer Score: ${computerScore}`;
};

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  if (computerChoice === userChoice) {
    result.textContent = `It's a tie! You both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;

    result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
  updateScores();
};

rock.addEventListener("click", function () {
  playRound("rock");
});

paper.addEventListener("click", function () {
  playRound("paper");
});

scissors.addEventListener("click", function () {
  playRound("scissors");
});
