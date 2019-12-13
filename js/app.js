'use-strict';

// ======= global variables =======

var charClass = '';
var charName = '';
var player = {};

var rogue = new Image();
// ======= DOM locations =======

var titleScreen = document.getElementById('title-screen');
var characterCreationScreen = document.getElementById('character-creation');
var selectNameScreen = document.getElementById('select-name');
var selectClassScreen = document.getElementById('select-class');
var characterSumScreen = document.getElementById('character-summary');

var nameForm = document.getElementById('char-name');

const canvas = document.getElementById('dungeon-screen');


// ------- buttons -------

var newGameButton = document.getElementById('new-game-button');
var loadGameButton = document.getElementById('load-game-button');

var warriorButton = document.getElementById('warrior-button');
var rogueButton = document.getElementById('rogue-button');
var mageButton = document.getElementById('mage-button');

var startGameButton = document.getElementById('start-game');

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
startGameButton.addEventListener('click', handleGameStart);

// ======= end event listeners =======


// ======= event handler functions =======

function newGame() {
  hide(titleScreen);
  show(characterCreationScreen);
}

function nameSubmit(event) {
  event.preventDefault();
  charName = event.target.charName.value;
  console.log('name: ', charName);

  hide(selectNameScreen);
  show(selectClassScreen);
}

function selectCharClass(event) {
  event.preventDefault();
  charClass = event.target.value;
  console.log('charClass: ', charClass);
  hide(selectClassScreen);
  popCharSummary();
  show(characterSumScreen);
}

function handleGameStart(event) {
  event.preventDefault();
  console.log('game start');
  player = new PlayerCharacter(charName, charClass);
  console.log('player: ', player);
  hide(characterCreationScreen);
  show(canvas);
  draw();
}


// ======= end event handler functions =======

// ======= core functons =======

function popCharSummary() {
  document.getElementById('summary-name').textContent = charName;
  document.getElementById('summary-class').textContent = charClass;
}

function draw() {
  rogue.src = '/Users/claytonjones/Projects/project-dungeon/img/rogue.png';
  if (canvas.getContext('2d')) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.drawImage(rogue, 10, 10);
  }
}

// ======= end core functons =======


// ======= constructor functions =======

function PlayerCharacter(name, characterClass) {
  this.name = name;
  this.characterClass = characterClass;
  this.hp = 100;
}

// ======= end constructor functions =======


