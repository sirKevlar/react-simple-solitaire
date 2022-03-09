import { useState } from 'react';
import Dump from './Dump';
import Home from './Home';
import Info from './Info';
import InHand from './InHand';
import Pile from './Pile';
import Stack from './Stack';

export default function Table() {
  const [currentDeck, setCurrentDeck] = useState({
    success: true,
    deck_id: 'sg4f04ohy1bz',
    remaining: 52,
    shuffled: true,
  });
  const [stack, setStack] = useState([]);
  const [inHand, setInHand] = useState([]);
  const [home, setHome] = useState({
    spades: 0,
    s: [],
    clubs: 0,
    c: [],
    hearts: 0,
    h: [],
    diamonds: 0,
    d: [],
  });
  const [dump, setDump] = useState({
    one: 0,
    n: [],
    two: 0,
    w: [],
    three: 0,
    h: [],
    four: 0,
    o: [],
  });

  return (
    <section className='table'>
      <Pile
        stack={stack}
        setStack={setStack}
        currentDeck={currentDeck}
        setCurrentDeck={setCurrentDeck}
      />
      <Home
        className='spades'
        home={home}
        setHome={setHome}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Home
        className='clubs'
        home={home}
        setHome={setHome}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Home
        className='hearts'
        home={home}
        setHome={setHome}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Home
        className='diamonds'
        home={home}
        setHome={setHome}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Info
        currentDeck={currentDeck}
        setCurrentDeck={setCurrentDeck}
        setStack={setStack}
        setInHand={setInHand}
        setHome={setHome}
        setDump={setDump}
      />
      <InHand inHand={inHand} />
      <Stack
        stack={stack}
        setStack={setStack}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Dump
        className='one'
        dump={dump}
        setDump={setDump}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Dump
        className='two'
        dump={dump}
        setDump={setDump}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Dump
        className='three'
        dump={dump}
        setDump={setDump}
        inHand={inHand}
        setInHand={setInHand}
      />
      <Dump
        className='four'
        dump={dump}
        setDump={setDump}
        inHand={inHand}
        setInHand={setInHand}
      />
    </section>
  );
}
