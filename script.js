let games = 0
let scoreGI = 0;
let scoreMac = 0;

playGame();

// function GetComputerChoice
function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    return choices[(Math.random() * choices.length) | 0];
    // return rock paper scissor
}

// function play a single round
function playRound(playerSelection, computerSelection){// function takes playerSelection and computerSelection
    // rock2 paper3 scissor1
    let tie = console.log(`Tie! You picked ${playerSelection} and Mac picked ${computerSelection}!`);
    let won = console.log(`${playerSelection} beats ${computerSelection}.`);
    let lose = console.log(`${computerSelection} beats ${playerSelection}.`);

    if ((playerSelection.toLowerCase()) === (computerSelection.toLowerCase())){// function is case insensitive
        return tie;;// return string lose win tie // use return not console.log()
   }  else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
    games++;
    scoreMac++;
    return lose;
    
   } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissor")){
    games++;
    scoreGI++;
    return won;
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissor")){
    games++;
    scoreMac++;
    return lose;
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
    games++;
    scoreGI++;
    return won;
    
   }else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
    games++;
    scoreGI++;
    return won;
    
   } else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
    games++;
    scoreMac++;
    return lose;
    
   }
   else {
    console.log("You can pick only Rock Paper or Scissor.");
    return;
   }
}






function playGame(){//function to play a 5 rounds game
for (i =0; i < 5; i++){
const playerSelection = prompt("Rock, Paper or scissor?");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log(`Current score is ${scoreGI} for GI and ${scoreMac} for Mac`);//keep score
if ((i === 4) && (scoreGI > scoreMac)){//report winner 
    console.log(`Gi won! ${scoreGI} for GI and ${scoreMac} for Mac`);
} else if  ((i === 4) && (scoreGI < scoreMac)){
    console.log(`Mac won! ${scoreGI} for GI and ${scoreMac} for Mac`);
} else if ((i === 4) && (scoreGI === scoreMac)){ 
    console.log(`Tie! ${scoreGI} for GI and ${scoreMac} for Mac`);
}
}
} // console.log(playRound(playerSelection, computerSelection));