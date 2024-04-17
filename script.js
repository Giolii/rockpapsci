//Computer picks rokc paper or scissor
let choices = ['rock', 'paper', 'scissor']
let compChoice = '';
function getComputerChoice(choices) {
 compChoice = choices[Math.floor(Math.random() * choices.length)];
}

