import drawCard from '../api/drawCard';

export default function Pile({ stack, setStack, currentDeck, setCurrentDeck }) {
  return (
    <div className='brown pile container center'>
      <div
        className='card-space'
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
        Pile
      </div>
    </div>
  );
}
