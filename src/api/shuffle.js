import axios from 'axios';

const userDecks = {
  k3vM0r3l: '6q390rlwbthu',
  p4m3l4M0r3l: 'sg4f04ohy1bz',
  v1ckyM0r3l: '9roimbxqhjo0',
  ph1lM0r3l: 'h8lukb8i1u23',
  amb3rM0r3l: '1l10l8zsfi8x',
  r2byM0r3l: 'aguqr2tb6f5c',
  alysMJ: 'vu362u3djvjq',
  islaPJ: 'ucgrolwt66ts',
};

export default function shuffle(user) {
  return axios
    .get(`https://deckofcardsapi.com/api/deck/${userDecks[user]}/shuffle`)
    .then(({ data }) => {
      return data;
    })
}
