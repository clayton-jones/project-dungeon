'use-strict';

// ======= DOM locations =======

var titleScreen = document.getElementById('title-screen');
var characterSelectScreen = document.getElementById('character-select');
var selectName = document.getElementById('select-name');
var selectClass = document.getElementById('select-class');
var characterSummary = document.getElementById('character-summary');

// ------- buttons -------

var newGameButton = document.getElementById('new-game-button');
var loadGameButton = document.getElementById('load-game-button');

// ------- buttons -------

// ======= end DOM locations =======

// ======= helper functions =======

function hide (elem) {
  elem.style.display = 'none';
}

function show (elem) {
  elem.style.display = 'block';
}

// ======= end helper functions =======


// ======= event listeners =======

newGameButton.addEventListener('click', newGame);

// ======= end event listeners =======


// ======= event handler functions =======

function newGame() {
  hide(titleScreen);
  show(characterSelectScreen);
}

// ======= event handler functions =======





