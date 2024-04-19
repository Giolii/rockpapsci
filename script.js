
let mistake = `Error! Pick Rock, Paper or Scissor.`;
let mac = 0;
let player = 0;
function getComputerChoice() { //Computer picks rock, paper or scissor
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playGame(){ //Play 5 games
        const result = playRound(playerSelection, computerSelection);
            console.log(result); // Log the result to the console
        if (mac + player === 5 && mac > player) {
            console.log(`You lose! Mac points:${mac}, Player points:${player}`);
            // break;
        } else if (mac + player === 5 && mac < player){
            console.log(`You win! Player points:${player}, Mac points:${mac}.`);
            // break;
        }
}

function playRound(playerSelection,computerSelection){
    let tie = `TIE! ${playerSelection} and ${computerSelection}`;
    let win = `Yes, ${playerSelection} beats ${computerSelection}.`;
    let lose= `No, ${computerSelection} beats ${playerSelection}.`;

    if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || 
    (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')){
        player++;
        // i++;
        return win;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
           return tie;
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor') || 
    (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'rock')){
        mac++;
        // i++;
        return lose;}
    else { 
        return mistake;}
    }

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissor = document.querySelector('#scissor');
const result = document.querySelector('#result');

btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection,computerSelection));
})
btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection,computerSelection));
})
btnScissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection,computerSelection));
})
