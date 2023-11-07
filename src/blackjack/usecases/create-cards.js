
/**
 * 
 * @param {String} card Selected card
 * @param {Number} turn Player's turn
 * @param {Array<HTMLElement>} playersCards Array of elements cotaining the player's cards
 */
export const createCard = ( card, turn, playersCards ) => {

  if ( !card ) throw new Error('The card is mandatory');
  if ( !playersCards || playersCards.length === 0 )
    throw new Error('The playerCards are mandatory and cannot be empty');

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.classList.add('cards');

  playersCards[turn].append( imgCard );
}
