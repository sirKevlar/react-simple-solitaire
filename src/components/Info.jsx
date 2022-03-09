import shuffle from '../api/shuffle';

export default function Info({ currentDeck, setCurrentDeck, setStack, setInHand, setHome }) {
  return (
    <div className='brown info center-top'>
      <h3>info</h3>
      <h3>cards left: {currentDeck.remaining}</h3>
      <button
        className='shuffle'
        onClick={() => {
          shuffle(currentDeck.deck_id)
            .then((shuffledDeck) => {
              setCurrentDeck(shuffledDeck);
              setStack([]);
              setInHand([])
              setHome({
                spades: 0,
                s: [null],
                clubs: 0,
                c: [null],
                hearts: 0,
                h: [null],
                diamonds: 0,
                d: [null],
              })
            })
            .catch(console.log);
        }}
      >
        shuffle deck
      </button>
    </div>
  );
}
