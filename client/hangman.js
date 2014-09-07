/**
 * Hangman
 **/
(function() {
    'use strict';
    var createMaskedValue = function(length) {
        var str = '';
        for(var i = 0; i < length; i++) {
            str += '_';
        }
        return str;
    },
        setCharAt = function(str, index, chr) {
            if(index > str.length - 1) {
                return str;
            }
            return str.substr(0, index) + chr + str.substr(index + 1);
        };
    var hangman = function(word) {
        var maskedValue = createMaskedValue(word.length),
            _falseGuesses = [];
        word = word.toUpperCase();
        return {
            maskedValue: function() {
                return maskedValue;
            },
            word: function() {
                return word;
            },
            guess: function(letter) {
                var res = false;
                letter = letter.toUpperCase();
                for(var i = 0; i < word.length; i++) {
                    if(word.charAt(i) === letter) {
                        res = true;
                        maskedValue = setCharAt(maskedValue, i, letter);
                    }
                }
                if(!res) {
                    _falseGuesses.push(letter);
                }
                return res;
            },
            falseGuesses: function() {
                return _falseGuesses;
            },
            isGameOver: function() {
                return _falseGuesses.length > 10 || this.isWinner();
            },
            isWinner: function() {
                return maskedValue.indexOf('_') === -1;
            }
        };
    };
    //Export module
    if(typeof module !== 'undefined' && module.exports) {
        module.exports = hangman;
    } else if(typeof window !== 'undefined') {
        window.hangman = hangman;
    }
}());