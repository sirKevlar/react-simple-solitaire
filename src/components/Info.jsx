import shuffle from '../api/shuffle';

export default function Info({ currentDeck, setCurrentDeck }) {
  return (
    <div className='brown info center-top'>
      <h2>info</h2>
      <h3>cards left: {currentDeck.remaining}</h3>
      <button
        className='shuffle'
        onClick={() => {
          shuffle(currentDeck.deck_id)
            .then((shuffledDeck) => {
              console.log(shuffledDeck);
              setCurrentDeck(shuffledDeck);
            })
            .catch(console.log);
        }}
      >
        shuffle deck
      </button>
    </div>
  );
}
