'use-strict';

// ======= DOM locations =======

var titleScreen = document.getElementById('title-screen');
var characterSelectScreen = document.getElementById('character-creation');
var selectName = document.getElementById('select-name');
var selectClass = document.getElementById('select-class');
var characterSummary = document.getElementById('character-summary');

var nameForm = document.getElementById('char-name');

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
nameForm.addEventListener('submit', nameSubmit);

// ======= end event listeners =======


// ======= event handler functions =======

function newGame() {
  hide(titleScreen);
  show(characterSelectScreen);
}

function nameSubmit(event) {
  event.preventDefault();

  console.log('name submitted');

  hide(selectName);
  show(selectClass);
}

// ======= event handler functions =======





