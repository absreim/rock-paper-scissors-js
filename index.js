const readlineSync = require('readline-sync')

let chosen = false
let choice = null
while(!chosen) {
  let origChoice = readlineSync.question('Rock, Paper, or Scissors?\n')
  choice = origChoice.toLowerCase()
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    chosen = true
  }
  else {
    console.log(`'${origChoice}' is not a valid choice.`)
  }
}

const compChoices = ['rock', 'paper', 'scissors']
const compChoiceIndex = Math.floor(Math.random() * 3)
const compChoice = compChoices[compChoiceIndex]

console.log(`Your choice was ${choice}.`)
console.log(`My choice was ${compChoice}.`)
