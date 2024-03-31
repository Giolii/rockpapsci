// function GetComputerChoice
function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    return choices[(Math.random() * choices.length) | 0];
    // return rock paper scissor
}
//function to play a 5 rounds game
//keep score
//report winner 
//display each round score
//display winner at the end
//change return value in something more useful




// function play a single round
function playRound(playerSelection, computerSelection){// function takes playerSelection and computerSelection
    // rock2 paper3 scissor1
    let tie = (`Tie! You picked ${playerSelection} and Mac picked ${computerSelection}!`);
    let won = (`${playerSelection} beats ${computerSelection}.`);
    let lose = (`${computerSelection} beats ${playerSelection}.`);



    if ((playerSelection.toLowerCase()) === (computerSelection.toLowerCase())){// function is case insensitive
        console.log(tie);// return string lose win tie // use return not console.log()
   }  else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
    games++;
    scoreMac++;
    console.log(lose);
    
   } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissor")){
    games++;
    scoreGI++;
    console.log(won);
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissor")){
    games++;
    scoreMac++;
    console.log(lose);
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
    games++;
    scoreGI++;
    console.log(won);
    
   }else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
    games++;
    scoreGI++;
    console.log(won);
    
   } else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
    games++;
    scoreMac++;
    console.log(lose);
    
   }
   else {
    console.log("You can pick only Rock Paper or Scissor.")
   }
}




let games = 0
let scoreGI = 0;
let scoreMac = 0;

function playGame(){
for (i =0; i < 5; i++){
const playerSelection = prompt("Rock, Paper or scissor?");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log(`Current score is ${scoreGI} for GI and ${scoreMac} for Mac`);
if ((i === 4) && (scoreGI > scoreMac)){
    console.log(`Gi won! ${scoreGI} for GI and ${scoreMac} for Mac`);
} else if  ((i === 4) && (scoreGI < scoreMac)){
    console.log(`Mac won! ${scoreGI} for GI and ${scoreMac} for Mac`);
} else if ((i === 4) && (scoreGI === scoreMac)){ 
    console.log(`Tie! ${scoreGI} for GI and ${scoreMac} for Mac`);
}
}
}
// console.log(playRound(playerSelection, computerSelection));








//playGame function, play a 5 rounds games
//keep score and report a winner or loser
//loop or repeat function five times
//console.log to display ech round,winner,loser
//prompt gives you input