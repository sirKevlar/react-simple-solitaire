export default function InHand({ inHand, hasWon, home, currentUser }) {
  const validUsersLookup = {
    k3vM0r3l: 'Kev Morel',
    p4m3l4M0r3l: 'Pamela Morel',
    v1ckyM0r3l: 'Vicky Morel',
    ph1lM0r3l: 'Phil Morel',
    amb3rM0r3l: 'Amber Morel',
    r2byM0r3l: 'Ruby Morel',
    alysMJ: 'Alys Morel-Jones',
    islaPJ: 'Isla Preston-Jones',
  };

  return (
    <div className='green in-hand center'>
      <div className='card-space hand-spread'>
        {inHand.length > 0 ? (
          inHand.map((card, i) => {
            return (
              <img
                className={`child horizontal-child-${i}`}
                key={card.cards[0].code}
                src={card.cards[0].image}
                alt='card'
              />
            );
          })
        ) : (
          <h2>Cards in hand</h2>
        )}
      </div>
      {hasWon && <h2>AN HONOURABLE VICTORY</h2>}
      <div className='score'>
        <h3 id='score'>{validUsersLookup[currentUser]}</h3>
        <h3 id='score'>
          Score: {home.s.length + home.c.length + home.h.length + home.d.length}
        </h3>
      </div>
    </div>
  );
}
