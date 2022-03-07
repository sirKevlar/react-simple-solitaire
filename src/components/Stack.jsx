export default function Stack({stack}) {
  return (
    <div className="brown stack container center"><div className="card-space">
      {stack.length > 0 && <img src={stack[0].cards[0].image} alt="card"/>}
      </div></div>
  )
}
