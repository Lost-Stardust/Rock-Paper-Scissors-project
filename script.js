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

let result = '';

function playRound(playerSelection) {

    //invokes computerPlay() function to let computer make its choice
    computerSelection = computerPlay()
    console.log(playerSelection)
    console.log(computerSelection)

    if ( //Win conditions
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        result = "you won";
        console.log(result);
        return result;

    } else if ( //lose conditions
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper")
    ) {
        result = "you lost";
        console.log(result);
        return result;
        
    } else if ( //tie conditions
        playerSelection == computerSelection 
    ) {
        result = "its a tie";
        console.log(result);
        return result;
        
    } else {
        alert("something went wrong")
    }
}

const results = document.getElementById('results');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => {
    playRound("rock");
    game()
});
paper.addEventListener('click', () => {
    playRound("paper");
    game()
});
scissors.addEventListener('click', () => {
    playRound("scissors");
    game();
});


// declare playerScore and computerScore 
// to be used in game() function to keep score

let playerScore = 0
let computerScore = 0


// create a new function called game()
// call the playRound() function inside the game() function
// game() function should play a 5 round game i.e. repeat playRound() 5 times
// game() function should keep score and report a winner or loser at the end

function game() {
      
    //score counter 
    //if result comes out to be "you won" then add point to player
    //if result comes out to be "you lost" then add point to computer
    //if result comes out to be "its a tie" then no points given to either party 

    if (result === "you won") {
        ++playerScore
        results.textContent = `computer score: ${computerScore}   player score: ${playerScore}`
    } else if (result === "you lost") {
        ++computerScore 
        results.textContent = `computer score: ${computerScore}   player score: ${playerScore}`
    } else if (result === "its a tie") {
        results.textContent = `computer score: ${computerScore}   player score: ${playerScore}`
    }

        console.log(playerScore)
        console.log(computerScore)

    

    //declare a winner by comparing points of player and computer
    //if player and computer has equal points then declare draw
    //if player has more points declare player the winner
    //if computer has more points declare computer the winner
//     if (playerScore === computerScore) {
//         console.log("The game was a draw, would you like to play again?")
//     } else if (playerScore > computerScore) {
//         console.log("You are the winner! :)")
//     } else if (playerScore < computerScore) {
//         console.log("The computer is the winner :(")
//     }
}



