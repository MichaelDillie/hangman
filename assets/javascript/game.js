var guessesLeft = 15;
var word;
var wordToGuess = [];
var guessedLetters = [];
var lost = "lost";

var wordList = ["javascript", "array", "document", "element", "argument", "function", "variable", "program", "developer", "internet", "coffee", "sleep"];

function start() {
    var displayWord = [];

    //Randomly picks one word from wordList
    word = wordList[Math.floor(Math.random() * wordList.length)]
    console.log(word);

    //Splitting word by each character and placing it into the empty wordToGuess array
    wordToGuess = word.split("");
    console.log(wordToGuess.length);

    //Creating the blank spaces for the guessable word
    for(var i = 0; i < wordToGuess.length; i++) {
        displayWord.push("_");
    }

    document.onkeyup = function(event) {
        //Starts game
        if(event.keyCode === 13) {
            //Changing the HTML from "Press Enter To Start!!" to "Can You Guess This Word?"
            document.getElementById("enter-to-start").innerHTML = "Can You Guess This Word?";
            document.getElementById("word-to-guess").innerHTML = displayWord;
            
        }
    }
}
start();