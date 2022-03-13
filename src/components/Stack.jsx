export default function Stack({ stack, setStack, inHand, setInHand }) {
  return (
    <div className='brown stack container center'>
      <div
        className='card-space'
        onClick={() => {
          if (stack.length > 0 && inHand.length === 0) {
            const newStack = [...stack];
            const movedCard = newStack.shift();
            setStack(newStack);
            setInHand([movedCard]);
          } else if (inHand.length === 1) {
            const newStack = [inHand[0], ...stack];
            setStack(newStack);
            setInHand([]);
          }
        }}
      >
        {stack.length > 0 ? (
          <img src={stack[0].cards[0].image} alt='card' />
        ) : (
          <h2>Stack</h2>
        )}
      </div>
    </div>
  );
}
