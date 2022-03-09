export default function Dump({ className, dump, setDump, inHand, setInHand }) {
  const secondLetter = className[1];
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
    <div className={`green dump ${className} center-top`}>
      <div
        className='card-space'
        onClick={() => {
          if (inHand.length > 0 && dump[className] === 0) {
            const newDump = { ...dump };
            newDump[secondLetter].push(inHand);
            newDump[className]++;
            setInHand([]);
            setDump(newDump);
          } else if (
            inHand.length > 0 &&
            cardRef[inHand[0].cards[0].code[0]] ===
              cardRef[
                dump[secondLetter][dump[className] - 1][0].cards[0].code[0]
              ] -
                1
          ) {
            const newDump = { ...dump };
            newDump[secondLetter].push(inHand);
            newDump[className]++;
            setInHand([]);
            setDump(newDump);
          }
        }}
      >
        {dump[className] === 0 ? (
          <h2>Dump {className}</h2>
        ) : (
          dump[secondLetter].map((card, i) => {
            return (
              <img
                className={`child child-${i}`}
                key={card[0].cards[0].code}
                src={card[0].cards[0].image}
                alt='card'
                onClick={(e) => {
                  if (inHand.length === 0) {
                    const newInHand = dump[secondLetter].slice(
                      +e.target.className.slice(-1)
                    );
                    const newFlatHand = newInHand.flat();
                    console.log(newInHand);
                    console.log(newFlatHand);
                    setInHand(newFlatHand);
                    const newDump = { ...dump };
                    newDump[secondLetter] = dump[secondLetter].slice(
                      0,
                      +e.target.className.slice(-1)
                    );
                    newDump[className] = newDump[className] - newInHand.length;
                    setDump(newDump);
                  }
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

// EXAMPLE OF DUMP INITIAL STATE
/*{
    one: 0,
    n: [null],
    two: 0,
    w: [null],
    three: 0,
    h: [null],
    four: 0,
    o: [null],
  } */
