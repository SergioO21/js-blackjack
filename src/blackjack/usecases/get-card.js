
/**
 * 
 * @param {Array<String>} deck Actual deck
 * @returns {Array<String>} First card in the deck
 */
export const getCard = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
    throw new Error("No more cards");
  }

  return deck.shift();
}
