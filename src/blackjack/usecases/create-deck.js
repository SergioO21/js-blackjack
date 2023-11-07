
import _ from 'underscore';

/**
 * 
 * @param {Array<String>} types Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} letters Example: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} New cards deck
 */
export const createDeck = () => {

  const letters = ['A', 'J', 'Q', 'K'],
        types   = ['C', 'D', 'H', 'S'];

  if ( !types || types.length === 0 )
    throw new Error('types is mandatory as an array of strings');

  if ( !letters || letters.length === 0 )
    throw new Error('letters is mandatory as an array of strings');

  let deck = [];

  for( let type of types ) {
    for( let i = 2; i <= 10 ; i++ ) {
      deck.push( i + type );
    }
    for( let letter of letters ) {
      deck.push( letter + type );
    }
  }
  return _.shuffle( deck );
}
