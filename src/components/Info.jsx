import shuffle from '../api/shuffle';

export default function Info({
  currentDeck,
  setCurrentDeck,
  setStack,
  setInHand,
  setHome,
  setDump,
  setHasWon,
  currentUser
}) {
  return (
    <div className='brown info center-top'>
      <h3>cards on pile: {currentDeck.remaining}</h3>
      <p id="rules">Rules: <br/><br/>Cards in home score 1pt<br/><br/>Fill home with suited cards A-K<br/><br/>Any card on empty dump<br/><br/>Subsequent dump cards unsuited K-A</p>
      <button
        className='shuffle'
        onClick={() => {
          shuffle(currentUser)
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
