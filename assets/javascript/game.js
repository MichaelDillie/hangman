var guessesLeft = 15;
var word;
var userGuess = "";
var wordToGuess = [];
var displayWord = [];
var guessedLetters = [];
var gameStarted = false;
var guessed = false;
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordList = ["javascript", "array", "document", "element", "argument", "function", "variable", "program", "developer", "internet", "coffee", "sleep"];


//This function will pick a word "randomly" from wordList
function pickWord() {
    //Randomly picks one word from wordList
    word = wordList[Math.floor(Math.random() * wordList.length)]
    //Splitting word by each character and placing it into the empty wordToGuess array
    wordToGuess = word.split("");
    console.log(word);
    console.log(word[2]);
    console.log(wordToGuess.length);
    //Creating the blank spaces for the guessable word
    for(var i = 0; i < wordToGuess.length; i++) {
        displayWord.push("_");
    }
    var wordDisplay = displayWord.join(" ");
    document.getElementById("word-to-guess").innerHTML = wordDisplay;
}


//Checking if letter that was guessed is available
function checkGuessedLetters() {
    //This is checking that if users guess is in alailableLetters
    if(availableLetters.indexOf(this.event.key) > -1) {
        //Looping through guessed letters for the length of availableLetters
        for(var i = 0; i < availableLetters.length; i++) {
            //If the users guess has already been guessed then we will set guessed to true
            if(this.event.key === guessedLetters[i]) {
                guessed = true;
            }
        }
    }
}


// ******* Letters guessed *******
//This will check if valid key was pressed and if so place in an array of guessed letters
function lettersGuessed() {
    //This checks if the users input was a letter or not
    if(this.event.key.match(/^[a-z]+$/)) {
        //This sets the state of guessed back to false each time user guesses
        guessed = false;
        //This runs the checkGuessedLetters function after guessed has been set back to false
        checkGuessedLetters();
        //This will reset the message that tells user they clicked an invalid key
        document.getElementById("letter-error").innerHTML = "";

        //The if statement checks if a character has been uesd before
        //If character has NOT been used then it pushes the character up to guessedLetters
        //Else display error "You have already used CHARACTER"
        if(guessed != true) {
            guessedLetters.push(this.event.key);
        } else {
            document.getElementById("letter-error").innerHTML = "You already guessed " + this.event.key;
        }
    }
    //If users input was not a letter then let them know
    else {
    //Displays invalid key error message
        document.getElementById("letter-error").innerHTML = "You pressed an invalid key";
    }
    document.getElementById("letters-guessed").innerHTML = guessedLetters;
}

function letterInWord() {
    console.log(displayWord);
    for(var i = 0; i < wordToGuess.length; i++) {
        if (this.event.key === wordToGuess[i]) {
            console.log("Found the letter you guessed in wordToGuess " + wordToGuess[i] + " at index " + i);
            displayWord.splice(i, 1, wordToGuess[i]);
        }
    }
    document.getElementById("word-to-guess").innerHTML = displayWord.join(" ");
    console.log(displayWord);
}

document.onkeyup = function(event) {
    if(!gameStarted && event.keyCode === 13) {
        pickWord();
        gameStarted = true;
    }
    if(gameStarted) {
        lettersGuessed();
        letterInWord();
    }
}


//* ********************************************************************* */
//* WHY DOSE THIS HAVE AN ERROR "Cannot set property 'innerHTML' of null" */
//* WHEN IT IS RAN IN KEYUP FUNCTION IT WORKS FINE!!!!!!!                 */
//* document.getElementById("word-to-guess").innerHTML = displayWord;     */
//* ********************************************************************* */