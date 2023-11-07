
/**
 * 
 * @param {Array<Number>} scores Array of scores 
 */
export const chooseWinner = ( scores ) => {

  if ( !scores || scores.length === 0 )
    throw new Error('The scores are mandatory and cannot be empty');

  const [ userScore, pcScore ] = scores;

  setTimeout(() => {
    if ( userScore > 21 ) {
      alert('You lost');
    } else if ( pcScore > 21 ) {
      alert('You won');
    } else if ( userScore > pcScore && userScore <= 21 ) {
      alert('You won')
    } else if ( userScore === pcScore ) {
      alert('Draw');
    } else {
      alert('You lost');
    }
  }, 300);
}
