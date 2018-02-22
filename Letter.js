var Letter = function (letter) {
    this.letter = letter; //hold the letter
    this.checker = false;
    this.underlyingChar = function (){
        //if true, then set the checker to false and return the letter that has be guessed
        // Otherwise return an underscore) if the letter has not been guessed
        if(this.checker) {
            this.checker = false;
            return this.letter + " ";
            console.log(this.letter);
        } else if (this.letter === " "){
            return "  ";
            console.log(" ");
        } else {
            return "_ ";
            console.log("_ ");
        }
    }
    this.charChecker = function (guessedLetter) {
        //if the guessed letter is guessed, then set the checker to true
        if(guessedLetter === this.letter) {
            this.checker = true;
        }
       
    }

}


//exporting the Letter constructor
module.exports =  Letter;


