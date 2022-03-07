import { useState } from "react";
import Dump from "./Dump";
import Home from "./Home";
import Info from "./Info";
import InHand from "./InHand";
import Pile from "./Pile";
import Stack from "./Stack";

export default function Table() {
const [currentDeck, setCurrentDeck] = useState({
  success: true,
  deck_id: 'sg4f04ohy1bz',
  remaining: 52,
  shuffled: true,
})
    
  return (
    <section className='table'>
        <Pile />
        <Home className='spades'/>
        <Home className='clubs'/>
        <Home className='hearts'/>
        <Home className='diamonds'/>
        <Info currentDeck={currentDeck} setCurrentDeck={setCurrentDeck}/>
        <InHand />
        <Stack />
        <Dump className='one'/>
        <Dump className='two'/>
        <Dump className='three'/>
        <Dump className='four'/>
    </section>
  )
}
