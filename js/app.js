/* eslint-disable no-undef */
'use-strict';

// ======= global variables =======

var charClass = '';
var charName = '';
var player = {};


// var debug = true;
// ======= DOM locations =======

// var titleScreen = document.getElementById('title-screen');
// var characterCreationScreen = document.getElementById('character-creation');
// var selectNameScreen = document.getElementById('select-name');
// var selectClassScreen = document.getElementById('select-class');
// var characterSumScreen = document.getElementById('character-summary');

// var nameForm = document.getElementById('char-name');

// const canvas = document.getElementById('dungeon-screen');


// ------- buttons -------

// var newGameButton = document.getElementById('new-game-button');
// var loadGameButton = document.getElementById('load-game-button');

// var warriorButton = document.getElementById('warrior-button');
// var rogueButton = document.getElementById('rogue-button');
// var mageButton = document.getElementById('mage-button');

// var startGameButton = document.getElementById('start-game');

// ------- buttons -------

// ======= end DOM locations =======

// ======= helper functions =======

// function hide (elem) {
//   elem.style.display = 'none';
// }

// function show (elem) {
//   elem.style.display = 'block';
// }

// ======= end helper functions =======


// ======= event listeners =======


$(function() {

  // event listener for new game button
  $('#new-game-button').click(function() {
    $('#title-screen').hide();
    $('#character-creation').show();
  });

  // event listener for name form
  $('#char-name').on('submit', function(event) {
    event.preventDefault();
    charName = $('#char-name input').val();

    $('#select-name').hide();
    $('#select-class').show();
  });

  // event listener for class buttons
  $('#class-list').click(function(event) {
    if (event.target.value) {
      event.preventDefault();
      charClass = event.target.value;
      console.log('charClass: ', charClass);
      $('#select-class').hide();
      // hide(selectClassScreen);
      popCharSummary();
      $('#character-summary').show();
      // show(characterSumScreen);
    }
  });

  // event listener for class img show
  // $('#class-list').mouseenter(function(event) {
  //   event.preventDefault();
  //   let buttonValue = event.target.value;

  //   switch (buttonValue) {
  //   case 'Warrior':
  //     $(this).siblings().hide();
  //     $('#warrior-img').show();
  //     break;
  //   case 'Rogue':
  //     $(this).siblings().hide();
  //     $('#rogue-img').show();
  //     break;
  //   case 'Mage':
  //     $(this).siblings().hide();
  //     $('#rogue-img').show();
  //     break;
  //   }

  // });

  $('#warrior-button').hover(
    function() {
      $('#warrior-img').show();
    },
    function() {
      $('#warrior-img').hide();
    }
  );

  $('#rogue-button').hover(
    function() {
      $('#rogue-img').show();
    },
    function() {
      $('#rogue-img').hide();
    }
  );

  $('#mage-button').hover(
    function() {
      $('#mage-img').show();
    },
    function() {
      $('#mage-img').hide();
    }
  );

  // event listener for class img hide all when mouse leaves list

  // event listener for start game button
  $('#start-game').click(function(event) {
    event.preventDefault();
    player = new PlayerCharacter(charName, charClass);
    console.log('player:', player);
    $('#character-creation').hide();
    $('#dungeon-screen').show().css('display', 'block');
    // draw();
  });

  // event listener for left and right buttons
  $('#left-right-buttons').click(function(event) {
    if (event.target.value) {
      $('#dungeon-screen').hide();
      $('#combat-screen').show();
      console.log('You went', event.target.value);
    }
  });
});

// newGameButton.addEventListener('click', newGame);
// nameForm.addEventListener('submit', nameSubmit);
// warriorButton.addEventListener('click', selectCharClass);
// rogueButton.addEventListener('click', selectCharClass);
// mageButton.addEventListener('click', selectCharClass);
// startGameButton.addEventListener('click', handleGameStart);

// ======= end event listeners =======


// ======= event handler functions =======

// function newGame() {
//   hide(titleScreen);
//   show(characterCreationScreen);
// }

// function nameSubmit(event) {
//   event.preventDefault();
//   charName = event.target.charName.value;
//   console.log('name: ', charName);

//   hide(selectNameScreen);
//   show(selectClassScreen);
// }

// function selectCharClass(event) {
//   event.preventDefault();
//   charClass = event.target.value;
//   console.log('charClass: ', charClass);
//   hide(selectClassScreen);
//   popCharSummary();
//   show(characterSumScreen);
// }

// function handleGameStart(event) {
//   event.preventDefault();
//   console.log('game start');
//   player = new PlayerCharacter(charName, charClass);
//   console.log('player: ', player);
//   hide(characterCreationScreen);
//   show(canvas);
//   draw();
// }


// ======= end event handler functions =======

// ======= core functons =======

function popCharSummary() {
  $('#summary-name').text(charName);
  $('#summary-class').text(charClass);
}

// function draw() {

//   var stage = new createjs.Stage('dungeon-screen');
//   var rogue = new createjs.Bitmap('../img/rogue.png');
//   rogue.scaleX = 0.5;
//   rogue.scaleY = 0.5;
//   stage.addChild(rogue);

//   if (debug) {
//     console.log('added rogue');
//   }

//   createjs.Tween.get(rogue, {loop: false})
//     .to({x: 100}, 1000, createjs.Ease.getPowInOut(16))
//     .to({alpha: 0}, 500, createjs.Ease.getPowInOut(2))
//     .to({alpha: 1}, 1000, createjs.Ease.getPowInOut(2))
//     .to({x: 300}, 500, createjs.Ease.getPowInOut(16));

//   createjs.Ticker.framerate = 60;
//   createjs.Ticker.addEventListener('tick', stage);
// }

// ======= end core functons =======


// ======= constructor functions =======

function PlayerCharacter(name, characterClass) {
  this.name = name;
  this.characterClass = characterClass;
  this.hp = 100;
}

// ======= end constructor functions =======


