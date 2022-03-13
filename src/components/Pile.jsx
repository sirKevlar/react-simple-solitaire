import drawCard from '../api/drawCard';

export default function Pile({ stack, setStack, currentDeck, setCurrentDeck }) {

  return (
    <div className='brown pile container center'>
      <div
        className='card-space card-space-pile'
        onClick={() => {
          if (currentDeck.remaining > 0)
            drawCard(currentDeck.deck_id)
              .then((cardRes) => {
                const newDeck = { ...currentDeck };
                newDeck.remaining--;
                setCurrentDeck(newDeck);
                const newStack = [cardRes, ...stack];
                setStack(newStack);
              })
              .catch(console.log);
        }}
      >
        <h2>Pile</h2>
      </div>
    </div>
  );
}

/* ---EXAMPLE RESPONSE FOR DRAW SINGLE CARD---

 {
   "success": true,
   "cards": [
       {
           "image": "https://deckofcardsapi.com/static/img/KH.png",
           "value": "KING",
           "suit": "HEARTS",
           "code": "KH"
       }
   ],
   "deck_id":"3p40paa87x90",
   "remaining": 51
 } */