var Letter = function (word) {
    this.word = word;
    this.displayedWord; //this will be used to display the letter or underscores
    this.checker = false;
    this.underlyingChar = function () {
        //TODO
        //if true then check the word and return with the underscores with the letter guessed

        //if it is not true, then return the work with underscores
    }
    this.charChecker = function (guessedLetter) {
        //TODO
        //check the guessed letter against the stored word

        //if it true, then set the checker boolean to true and run the underlyingChar function

        //otherwise return false
    }
}

//exporting the Letter constructor
module.exports =  Letter;