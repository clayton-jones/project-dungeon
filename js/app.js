'use-strict';

// ======= global variables =======

var charClass = '';

// ======= DOM locations =======

var titleScreen = document.getElementById('title-screen');
var characterSelectScreen = document.getElementById('character-creation');
var selectNameScreen = document.getElementById('select-name');
var selectClassScreen = document.getElementById('select-class');
var characterSumScreen = document.getElementById('character-summary');

var nameForm = document.getElementById('char-name');

// ------- buttons -------

var newGameButton = document.getElementById('new-game-button');
var loadGameButton = document.getElementById('load-game-button');

var warriorButton = document.getElementById('warrior-button');
var rogueButton = document.getElementById('rogue-button');
var mageButton = document.getElementById('mage-button');


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
warriorButton.addEventListener('click', selectCharClass);
rogueButton.addEventListener('click', selectCharClass);
mageButton.addEventListener('click', selectCharClass);

// ======= end event listeners =======


// ======= event handler functions =======

function newGame() {
  hide(titleScreen);
  show(characterSelectScreen);
}

function nameSubmit(event) {
  event.preventDefault();

  console.log('name submitted');

  hide(selectNameScreen);
  show(selectClassScreen);
}

function selectCharClass(event) {
  event.preventDefault();
  charClass = event.target.value;
  console.log('charClass: ', charClass);
  hide(selectClassScreen);
  show(characterSumScreen);
}


// ======= event handler functions =======





