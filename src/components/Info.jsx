import shuffle from '../api/shuffle';

export default function Info({
  currentDeck,
  setCurrentDeck,
  setStack,
  setInHand,
  setHome,
  setDump,
  setHasWon,
}) {
  return (
    <div className='brown info center-top'>
      <h3>cards on pile: {currentDeck.remaining}</h3>
      <button
        className='shuffle'
        onClick={() => {
          shuffle(currentDeck.deck_id)
            .then((shuffledDeck) => {
              setCurrentDeck(shuffledDeck);
              setStack([]);
              setInHand([]);
              setHome({
                spades: 0,
                s: [],
                clubs: 0,
                c: [],
                hearts: 0,
                h: [],
                diamonds: 0,
                d: [],
              });
              setDump({
                one: 0,
                n: [],
                two: 0,
                w: [],
                three: 0,
                h: [],
                four: 0,
                o: [],
              });
              setHasWon(false);
            })
            .catch(console.log);
        }}
      >
        shuffle deck
      </button>
    </div>
  );
}
