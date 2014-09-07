'use strict';
var words = ['friður',
'rúsína',
'krúttsprengja',
'dúlla',
'mega',
'typpi',
'pipp',
'ástarpungur',
'íkorni',
'refur',
'flóðhestur',
'þoka',
'rigning',
'sólskin',
'malbik',
'birki',
'handrið',
'klukka',
'motta',
'ruggustóll',
'sallatbar',
'fundur',
'inniskór',
'jólasveinn',
'buxur',
'skósveinn',
'víkingur',
'sófasett',
'rafmagnsgítar',
'spaung',
'hreindýr',
'skemmtilegt',
'saltstöng',
'bókaormur',
'kúrbítur',
'slátur',
'kjötsúpa',
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

var maskedWordView = document.getElementById('maskedword'),
    keys = document.querySelectorAll('.keys span'),
    childNodes = document.querySelectorAll('#hangman .stroke'),
    popup = document.getElementById('popup'),
    popupText = document.getElementById('popup-text'),
    message = document.getElementById('message'),
    aftur = document.getElementById('aftur'),
    i = 0,
    game;

function renderView(){
	maskedWordView.textContent = game.maskedValue();
}

function createGame(){
    var index = Math.floor(Math.random()*words.length);
    return hangman(words.splice(index, 1)[0]);
}
game = createGame();

renderView();

var onKeyClick = function (e){
    var character = e.target.textContent;
    e.target.className += ' guessed';
    if(!game.guess(character)){
        childNodes[i].setAttribute('class', 'draw ' + childNodes[i].getAttribute('class'));
        i++;
    }
    if(game.isGameOver()){
        popupText.textContent = game.isWinner()?'Jeeeei... vel gert!!!': 'Úbs... :(';
        message.textContent = game.isWinner()?'': 'Orðið er: ' + game.word();
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
    for(j=0;j<keys.length;j++) {
        keys[j].className = '';
    }
    if(words.length) {
        game = createGame();
        renderView();
    } else {
        window.alert('Ekki með fleiri orð í bili.');
    }
});