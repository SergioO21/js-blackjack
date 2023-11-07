import _ from 'underscore';
import { createDeck, getCard, getScore, createCard, pcGame } from './usecases';

'use strict'

let deck = [];
let scores = [];

// HTML References
const btnNew  = document.querySelector('#btnNew'),
      btnGet  = document.querySelector('#btnGet'),
      btnStop = document.querySelector('#btnStop');

const scoresHTML = document.querySelectorAll('small'),
      playersCards = document.querySelectorAll('.divCards');

const gameInit = ( numberPlayers = 2 ) => {

  deck = createDeck();
  scores = [];

  for( let i = 0; i < numberPlayers; i++ ) {
    scores.push(0);
  }

  scoresHTML.forEach( score => score.innerText = 0 );
  playersCards.forEach( cards => cards.innerHTML = '' );

  btnGet.disabled = false;
  btnStop.disabled = false;
}

// Events
btnGet.addEventListener('click', () => {

  const card = getCard( deck );
  const userScore = getScore( card, 0 , scores, scoresHTML);

  createCard( card, 0, playersCards );

  if ( userScore > 21 ) {
    console.warn('You Lose');
    btnGet.disabled = true;
    btnStop.disabled = true;
    pcGame( userScore, deck, scores, scoresHTML, playersCards );

  } else if ( userScore === 21 ) {
    console.warn('Awesome, 21!!!');
    btnGet.disabled = true;
    btnStop.disabled = true;
    pcGame( userScore, deck, scores, scoresHTML, playersCards );
  }

} );

btnStop.addEventListener('click', () => {
  btnGet.disabled = true;
  btnStop.disabled = true;
  pcGame( scores[0], deck, scores, scoresHTML, playersCards );
})

btnNew.addEventListener('click', () => {
  gameInit();
});
