export default function Home({
  className,
  home,
  setHome,
  inHand,
  setInHand,
  setHasWon,
}) {
  const capsFirstLetter = className[0].toUpperCase();
  const firstLetter = className[0];
  const cardRef = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 10,
    J: 11,
    Q: 12,
    K: 13,
  };

  return (
    <div className={`green home ${className} center`}>
      <div
        className='card-space'
        onClick={() => {
          if (
            inHand.length === 1 &&
            inHand[0].cards[0].suit[0] === capsFirstLetter &&
            cardRef[inHand[0].cards[0].code[0]] === home[className] + 1
          ) {
            const newHome = { ...home };
            newHome[firstLetter].push(inHand);
            newHome[className]++;
            setInHand([]);
            setHome(newHome);
            if (
              home.s.length + home.c.length + home.h.length + home.d.length ===
              52
            ) {
              setHasWon(true);
            }
          }
        }}
      >
        {home[className] === 0 ? (
          <h2>Home {className}</h2>
        ) : (
          <img
            src={home[firstLetter][home[className] - 1][0].cards[0].image}
            alt='card'
          />
        )}
      </div>
    </div>
  );
}

// EXAMPLE OF HOME INITIAL STATE
/*{
  spades: 0,
  s: [],
  clubs: 0,
  c: [],
  hearts: 0,
  h: [],
  diamonds: 0,
  d: [],
}*/
