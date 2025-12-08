function playGame() {
    //Generate a random integer betweeb 1 and 10
    const randomNumber = Math.floor(Math.random() *10) + 1;

    //prompt the user to guess the number
    const userGuess = parseInt(prompt("Guess a number between 1 and 10:"),10);


    //Validate the user's input
    if (isNaN(userGuess) || userGuess <1 || userGuess >10) {
        alert("Please enter a valid between 1 and 10.")
        return;
    }

    //chechk if the guess is correct
    if(userGuess === randomNumber) {
        alert("Good Work! You guesses it right. ")
    }else{
        alert(`Not matched. The correct number was ${randomNumber}.`);
    }
}