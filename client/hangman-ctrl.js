
var words = ['friður',
'rúsína',
'krúttsprengja',
'dúlla',
'mega',
'typpi',
'pipp',
'ástarpungur',
'bakarí',
'hrútur',
'gandálfur',
'drakúla',
'fróði',
'eldgos',
'bárðabunga',
'eyjafjallajökull',
'þórsmörk',
'dagmamma',
'prinsessa',
'æðislegt',
'sletta'];

var maskedWordView = document.getElementById('maskedword');
var keys = document.querySelectorAll('.keys span');
var childNodes = document.querySelectorAll('#hangman .stroke');
var popup = document.getElementById('popup');
var popupText = document.getElementById('popup-text');
var aftur = document.getElementById('aftur');
var i = 0;

function renderView(){
	maskedWordView.textContent = game.maskedValue();
}

function createGame(){
    var index = Math.floor(Math.random()*words.length);
    return hangman(words.splice(index, 1)[0]);
}
var game = createGame();

renderView();

var onKeyClick = function (e){
    var character = e.target.textContent;
    e.target.className += ' guessed';
    if(!game.guess(character)){
        childNodes[i].setAttribute('class', 'draw ' + childNodes[i].getAttribute('class'));
        i++;
    }
    if(game.isGameOver()){
        popupText.textContent = game.isWinner()?'Til hamingju, þú vannst!!!': 'Því miður, þú ert dauður :( Orðið er ' + game.word();
        popup.className += ' glass-show';
    }
    renderView();
};

for(var j=0;j<keys.length;j++) {
    keys[j].addEventListener('click', onKeyClick);    
}

aftur.addEventListener('click', function(){
    popup.className = 'glass';
    i=0;
    for(var j=0;j<childNodes.length;j++){
        childNodes[j].setAttribute('class', 'stroke');
    }
    for(var j=0;j<keys.length;j++) {
        keys[j].className = '';
    }
    if(words.length) {
        game = createGame();
        renderView();
    } else {
        alert('Ekki með fleiri orð í bili.');
    }
})