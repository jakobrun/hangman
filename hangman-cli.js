'use strict';

var hangman = require('./client/hangman'),
    read = require('read');

//Ask for a word
read({prompt: 'Sláðu inn orð:'}, function(err, word){
    var game = hangman(word);
    console.log(game.maskedValue());
    
    function readLetter(){
           read({prompt: 'Sláðu inn staf'}, function(err, letter){
            game.guess(letter);
            console.log(game.falseGuesses().join(', '));
            console.log(game.maskedValue());
            if(game.isGameOver()) {
                console.log(game.isWinner() ? 'Congrats you´ve won the game!!! :)' : 'sorry game over :(');
            } else {
            	readLetter();                
            }
    	});
    }
    readLetter();
});

