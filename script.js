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

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}



// function play a single round
function playRound(playerSelection, computerSelection){// function takes playerSelection and computerSelection
    // rock2 paper3 scissor1
    let tie = (`Tie! You picked ${playerSelection} and Mac picked ${computerSelection}!`);
    let won = (`You Won! ${playerSelection} beats ${computerSelection}.`);
    let lose = (`You Lose! ${playerSelection} beats ${computerSelection}.`);

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){// function is case insensitive
        return tie;// return string lose win tie // use return not console.log()
   }  else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper")){
    scoreMac++;
    return lose;
    
   } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissor")){
    scoreGi++;
    return won;
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissor")){
    scoreMac++;
    return lose;
   
   } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
    scoreGi++;
    return won;
    
   }else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "paper")){
    scoreGi++;
    return won;
    
   } else if ((playerSelection.toLowerCase() === "scissor") && (computerSelection.toLowerCase() === "rock")){
    scoreMac++;
    return lose;
    
   }
   else {
    console.log("You can pick only Rock Paper or Scissor.")
   }

}





const playerSelection = prompt("Rock, Paper or scissor?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));








//playGame function, play a 5 rounds games
//keep score and report a winner or loser
//loop or repeat function five times
//console.log to display ech round,winner,loser
//prompt gives you input