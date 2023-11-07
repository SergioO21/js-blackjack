
/**
 * 
 * @param {String} card Selected card
 * @returns {Number} Card value
 */
export const cardValue = ( card ) => {

  if ( !card ) throw new Error('The card is mandatory');

  let value = card.substring(0, card.length - 1);

  return  ( isNaN( value ) ) ?
          ( value === 'A' )  ? 11 : 10
          : value * 1;
}
