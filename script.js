//make a function named computerPlay 
//computerPlay will randomly return either "rock", "paper", or "scissors" 

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex =  Math.floor(Math.random()* choices.length);
    return choices[randomIndex]
}


//create a function that plays a single round of rock, paper, scissors
//function should take two parameters: playerSelection and computerSelection
//playerSelection is taken with a prompt 
//function should return string that declares the winner
//write conditionals for each case of rock, paper, scissors
//playerSelection parameter should be case insensitive


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon!").toLowerCase()

    console.log(playerSelection) 

    computerSelection = computerPlay()

    console.log(computerSelection)

    const result = ["win", "lose", "draw"]
   
    if (playerSelection == "rock" && computerSelection == "scissors") {
        
        console.log("You won, rock beats scissors!");
        return result[0]

    } else if (playerSelection == "rock" && computerSelection == "paper") {
        
        console.log("You lost, paper beats rock!");
        return result[1]

    } else if (playerSelection == "rock" && computerSelection == "rock") {
        
        console.log("Its a tie!");
        return result[2]

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        
        console.log("You won, paper beats rock!");
        return result[0]

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        console.log("You lost, paper loses to scissors!")
        return result[1]

    } else if (playerSelection == "paper" && computerSelection == "paper") {

        console.log("Its a tie!")
        return result[2]

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        console.log("You win, scissors beats paper!")
        return result[0]

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        console.log("You lost, scissors loses to rock!")
        return result[1]

    } else if (playerSelection == "scissors" && computerSelection == "scissors") {

        console.log("Its a tie!")
        return result[2]

    } else {
        
        console.log("something went wrong :(")

    }

}

playRound()
const playerSelection = "rock";
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))