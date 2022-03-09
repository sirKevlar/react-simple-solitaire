export default function InHand({ inHand }) {
  // console.log(inHand);
  return (
    <div className='green in-hand center'>
      <div className='card-space'>
        {inHand.length > 0 ? (
          <img src={inHand[0].cards[0].image} alt='card' />
        ) : (
          <h2>Cards in hand</h2>
        )}
      </div>
    </div>
  );
}
