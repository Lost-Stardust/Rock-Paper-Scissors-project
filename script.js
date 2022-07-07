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


function playRound() {
    playerSelection = prompt("Choose your weapon!").toLowerCase()

    console.log(playerSelection) 

    computerSelection = computerPlay()

    console.log(computerSelection)

    if ( //Win conditions
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        const result = "you won"
        console.log(result)
        return result 

    } else if ( //lose conditions
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        const result = "you lost"
        console.log(result)
        return result
        
    } else if ( //tie conditions
        playerSelection === computerSelection 
    ) {
        const result = "its a tie"
        console.log(result)
        return result
        
    } else {
        alert("something went wrong")
    }
}



// create a new function called game()
// call the playRound() function inside the game() function
// game() function should play a 5 round game i.e. repeat playRound() 5 times
// game() function should keep score and report a winner or loser at the end

function game() {
    for(let i = 0; i < 5; i++){
        const result = playRound(i)
        console.log(result)
    }
}

game()


 
