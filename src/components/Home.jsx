export default function Home({ className, home, setHome, inHand, setInHand }) {
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
          }
        }}
      >
        {home[className] === 0 ? (
          <h2>Home {className}</h2>
        ) : (
          <img
            src={home[firstLetter][home[className]][0].cards[0].image}
            alt='card'
          />
        )}
      </div>
    </div>
  );
}

/*{
  spades: 0,
  s: [null],
  clubs: 0,
  c: [null],
  hearts: 0,
  h: [null],
  diamonds: 0,
  d: [null],
}*/
