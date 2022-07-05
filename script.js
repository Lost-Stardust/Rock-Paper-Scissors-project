//make a function named computerPlay 
//computerPlay will randomly return either "rock", "paper", or "scissors" 

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
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
    playerSelection = prompt("Choose your weapon!")
    console.log(playerSelection)   
    computerSelection = computerPlay()
    console.log(computerSelection)
   
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        
        console.log("You won, rock beats scissors!");

    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        
        console.log("You lost, paper beats rock!");

    } else if (playerSelection == "rock" && computerSelection == "Rock") {
        
        console.log("Its a tie!");

    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        
        console.log("You won, paper beats rock!");

    } else if (playerSelection == "paper" && computerSelection == "Scissors") {

        console.log("You lost, paper loses to scissors!")

    } else if (playerSelection == "paper" && computerSelection == "Paper") {

        console.log("Its a tie!")

    } else if (playerSelection == "scissors" && computerSelection == "Paper") {

        console.log("You win, scissors beats paper!")

    } else if (playerSelection == "scissors" && computerSelection == "Rock") {

        console.log("You lost, scissors loses to rock!")

    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {

        console.log("Its a tie!")

    } else {
        
        console.log("something went wrong :(")

    }

}

playRound()