
let mistake = `Error! Pick Rock, Paper or Scissor.`;
let mac = 0;
let player = 0;
function getComputerChoice() { //Computer picks rock, paper or scissor
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection,computerSelection){
    let tie = `TIE! ${playerSelection} and ${computerSelection}.`;
    let win = `YES, ${playerSelection} beats ${computerSelection}.`;
    let lose= `NO, ${computerSelection} beats ${playerSelection}.`;
    const macWin = `You LOSE! Mac points:${mac}, Player points:${player}.`;
    const playerWin = `You WIN! Player points:${player} Mac points:${mac}.`;

    if (mac === 5) return macWin;
    if (player === 5) return playerWin;
    

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
const buttons = document.querySelector('#buttons');
const score = document.querySelector('#score')

btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    score.textContent = `PLAYER: ${player}  VS  MAC: ${mac}`
    result.textContent = (playRound(playerSelection,computerSelection));
})
btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    score.textContent = `PLAYER: ${player}  VS  MAC: ${mac}.`
    result.textContent = (playRound(playerSelection,computerSelection));

})
btnScissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
    score.textContent = `PLAYER: ${player}  VS  MAC: ${mac}.`
    result.textContent = (playRound(playerSelection,computerSelection));
})
