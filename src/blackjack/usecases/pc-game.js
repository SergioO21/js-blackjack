
import { getCard, getScore, createCard } from './';
import { chooseWinner } from './choose-winner';

/**
 * 
 * @param {Number} minScore Score to beat
 * @param {Array<String>} deck Actual deck
 * @param {Array<Number>} scores Array of scores
 * @param {Array<HTMLElement>} scoresHTML Array of elements showing scores 
 * @param {Array<HTMLElement>} playersCards Array of elements cotaining the player's cards 
 */
export const pcGame = ( minScore, deck, scores, scoresHTML, playersCards ) => {

  if ( !minScore ) throw new Error('The minScore is mandatory');
  if ( !deck || deck.length === 0 ) throw new Error('The deck is mandatory');
  if ( !scores || scores.length === 0 )
    throw new Error('The scores are mandatory and cannot be empty');
  if ( !scoresHTML || scoresHTML.length === 0 )
    throw new Error('The scoresHTML are mandatory and cannot be empty');
  if ( !playersCards || playersCards.length === 0 )
    throw new Error('The playerCards are mandatory and cannot be empty');

  let pcScore = 0;

  do {
    const card = getCard( deck );
    pcScore = getScore( card, scores.length - 1, scores, scoresHTML );
    createCard( card, scores.length - 1, playersCards )

  } while ( pcScore < minScore && minScore <= 21 )

  chooseWinner( scores );
}
