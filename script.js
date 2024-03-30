


// return string lose win tie
// function is case insensitive
// use return not console.log()




console.log("start");// function GetComputerChoice
function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    return choices[(Math.random() * choices.length) | 0];
    // return rock paper scissor
}

// function play a single round
function playRound(playerSelection, computerSelection){// function takes playerSelection and computerSelection
    // rock2 paper3 scissor1
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log(`Tie!`);
   }  else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
    console.log("You Lose! Paper beats Rock.")
   } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissor")){
    console.log("You Won! Rock beats Scissor.")
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissor")){
    console.log("You Lose! Scissor beats Paper.")
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
    console.log("You won! Paper beats Rock.")
   }else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
    console.log("You Won! Scissor beats Paper.")
   } else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
    console.log("You Lose! Rock beats Scissor.")
   }
   else {
    console.log("You can pick only Rock Paper or Scissor.")
   }
}


const playerSelection = prompt("Rock, Paper or scissor?");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log(playerSelection, computerSelection);









//playGame function, play a 5 rounds games
//keep score and report a winner or loser
//loop or repeat function five times
//console.log to display ech round,winner,loser
//prompt gives you input