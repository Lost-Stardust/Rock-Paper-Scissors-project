//make a function named computerPlay 
//computerPlay will randomly return either "rock", "paper", or "scissors" 

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex =  Math.floor(Math.random()* choices.length);
    console.log(choices[randomIndex])
}
computerPlay()