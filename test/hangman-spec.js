describe('Hangman', function() {
    describe('Game with word test', function() {
        var game;
        beforeEach(function() {
            game = hangman('test');
        });
        it('should return masked string', function() {
            expect(game.maskedValue()).to.equal('____');
        });
        it('should return false for incorrect guess', function() {
            expect(game.guess('a')).to.equal(false);
        });
        it('should return true for correct guess', function() {
            expect(game.guess('t')).to.equal(true);
        });
        it('should return masked string with correct letters', function() {
            game.guess('t');
            expect(game.maskedValue()).to.equal('T__T');
        });
        it('should return false guesses', function() {
            game.guess('p');
            game.guess('t');
            game.guess('l');
            expect(game.falseGuesses()).to.eql(['P', 'L']);
        });
        it('should game over when out off guesses', function() {
            var chars = ['p', 'o', 'r', 'g', 'a', 'y', 'ð', 'l', 'k', 'j', 'h'];
            chars.forEach(function (c) {
	            expect(game.isGameOver()).to.be.false;
                game.guess(c);
            });
            expect(game.isGameOver()).to.be.true;
        });
        it('should win the game when all letters are in place', function() {
            expect(game.isWinner()).to.be.false;
            game.guess('t');
            game.guess('e');
            game.guess('s');
            expect(game.isWinner()).to.be.true;
            expect(game.isGameOver()).to.be.true;
        });
    });
});