//Computer picks rock, paper or scissor
let mistake = `Error! Pick Rock, Paper or Scissor.`;
let mac = 0;
let player = 0;
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}
// One Round



//Play 5 games
function playGame(){
    for (let i = 0; i < 5; ) {
        const playerSelection = prompt('Rock, paper or scissor?');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        function playRound(playerSelection,computerSelection){
            let tie = `TIE! ${playerSelection} and ${computerSelection}`;
            let win = `Yes, ${playerSelection} beats ${computerSelection}.`;
            let lose= `No, ${computerSelection} beats ${playerSelection}.`;
        
            if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || 
            (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')){
                player++;
                i++;
                return win;
            } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
                   return tie;
            } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor') || 
            (playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'rock')){
                mac++;
                i++;
                return lose;}
            else { 
                return mistake;}
            }
            console.log(result); // Log the result to the console
        if (mac + player === 5 && mac > player) {
            console.log(`You lose! Mac points:${mac}, Player points:${player}`);
            break;
        } else if (mac + player === 5 && mac < player){
            console.log(`You win! Player points:${player}, Mac points:${mac}.`);
            break;
        }
        // if (i = 4 && mac > player) {
        //     console.log(`You lose! Mac points:${mac}, Player points:${player}`);
        // } else if (i = 4 && mac < player){
        //     console.log(`You won! Mac points:${mac}, Player points:${player}`);
        // }

    }
}
playGame();