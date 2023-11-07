
import { cardValue } from "./card-value";

/**
 * 
 * @param {String} card Selected card
 * @param {Number} turn Player's turn
 * @param {Array<Number>} scores Array of scores
 * @param {Array<HTMLElement>} scoresHTML Array of elements showing scores
 * @returns {Number} Score value
 */
export const getScore = ( card, turn, scores, scoresHTML ) => {

  if ( !card ) throw new Error('The card is mandatory');
  if ( !scores || scores.length === 0 )
    throw new Error('The scores are mandatory and cannot be empty');
  if ( !scoresHTML || scoresHTML.length === 0 )
    throw new Error('The scoresHTML are mandatory and cannot be empty');

  scores[turn] += cardValue( card );
  scoresHTML[turn].innerText = scores[turn];

  return scores[turn];
}
