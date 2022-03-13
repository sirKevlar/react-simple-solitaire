import { useEffect, useState } from 'react';
import shuffle from '../api/shuffle';

export default function Info({
  currentDeck,
  setCurrentDeck,
  setStack,
  setInHand,
  setHome,
  setDump,
  setHasWon,
  currentUser,
}) {
  const [isRules, setIsRules] = useState(true);

  useEffect(() => {
    shuffle(currentUser)
      .then((shuffledDeck) => {
        setCurrentDeck(shuffledDeck);
      })
      .catch(console.log);
  }, [currentUser]);

  return (
    <div className='brown info center-top'>
      <h3>cards on pile: {currentDeck.remaining}</h3>
      {isRules ? (
        <p id='rules'>
          Rules: <br />
          <br />
          Cards in home score 1pt
          <br />
          <br />
          Fill home with suited cards A-K
          <br />
          <br />
          Any card on empty dump/stack
          <br />
          <br />
          Subsequent dump cards unsuited K-A
        </p>
      ) : (
        <p id='rules'>
          Instructions: <br />
          <br />
          Click on pile draws card
          <br />
          <br />
          No card in hand: click stack or dump puts card/s in hand
          <br />
          <br />
          Card/s in hand: click on valid space transfers card/s
        </p>
      )}
      <button
        className='shuffle'
        onClick={() => {
          setIsRules(!isRules);
        }}
      >
        {isRules ? 'Instructions' : 'Rules'}
      </button>
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
        Restart
      </button>
    </div>
  );
}
