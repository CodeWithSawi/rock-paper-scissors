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

//now we need to update the scores in the html
const updateScores = () => {
  userEl.textContent = `${userScore}`;
  compEl.textContent = `${computerScore}`;
};

// now a function that will play the game
const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  //instead of writing all the possible combinations for a draw, i will simply check if the
  // user choice is the same as the computer choice
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

const updateCopyright = () => {
  const year = new Date().getFullYear();
  document.querySelector(".copyright").innerHTML =
    `&copy; ${year} Rock Paper Scissors • Built by Momoh Sawi`;
};

updateCopyright();
