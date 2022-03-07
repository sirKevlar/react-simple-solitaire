import shuffle from '../api/shuffle';

export default function Info({ currentDeck, setCurrentDeck, setStack }) {
  return (
    <div className='brown info center-top'>
      <h2>info</h2>
      <h3>cards left: {currentDeck.remaining}</h3>
      <button
        className='shuffle'
        onClick={() => {
          shuffle(currentDeck.deck_id)
            .then((shuffledDeck) => {
              setCurrentDeck(shuffledDeck);
              setStack([]);
            })
            .catch(console.log);
        }}
      >
        shuffle deck
      </button>
    </div>
  );
}
