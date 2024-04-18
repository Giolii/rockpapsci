//Computer picks rock, paper or scissor

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}
// One Round

function playRound(playerSelection,computerSelection){
    let tie = `TIE! ${playerSelection} and ${computerSelection}`;
    let win = `You win, ${playerSelection} beats ${computerSelection}.`;
    let lose= `You lose, ${computerSelection} beats ${playerSelection}.`;

    if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || 
    (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')){
        return win;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
           return tie;
    } else {
        return lose;
    }
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));