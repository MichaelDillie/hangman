var guessesLeft = 15;
var word;
var guessedLetters = [];
var lost = "lost";

var wordList = ["javascript", "array", "document", "element", "argument", "function", "variable", "program", "developer", "internet", "coffee", "sleep"];

// Word picked
// document.getElementById("play-btn").addEventListener("click", playGame);
function playGame() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
}
playGame();

document.onkeyup = function (event) {
    console.log(event.key);

    // Guesses left
    guessesLeft--;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    console.log(guessesLeft);
    if (guessesLeft === 0) {
        alert("You Lost :(")
    }

    // Letters guessed
    guessedLetters.push(event.key);
    document.getElementById("letters-guessed").innerHTML = guessedLetters;
    console.log(guessedLetters);
}