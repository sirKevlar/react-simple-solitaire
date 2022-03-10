export default function InHand({ inHand, hasWon }) {
  return (
    <div className='green in-hand center'>
      <div className='card-space hand-spread'>
        {inHand.length > 0 ? (
          inHand.map((card, i) => {
            return <img className={`child horizontal-child-${i}`} key={card.cards[0].code} src={card.cards[0].image} alt='card' />;
          })
        ) : (
          <h2>Cards in hand</h2>
        )}
      </div>
      {hasWon && <h2>AN HONOURABLE VICTORY</h2>}
    </div>
  );
}
