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

   
    if ( //Win conditions
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("you won!")
        return "You won!"
    } else if ( // lose conditions
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        console.log("you lost.")
        return "You lost."
    } else if ( //draw conditions
        playerSelection === computerSelection 
    ) {
        console.log("its a draw")
        return "Its a draw :/"
    } else {
        alert("something went wrong")
    }
}

playRound()




 
