import axios from 'axios';

const shuffledDeck = {
  success: true,
  deck_id: 'sg4f04ohy1bz',
  remaining: 52,
  shuffled: true,
};

export default function shuffle() {
  return axios
    .get(`https://deckofcardsapi.com/api/deck/${shuffledDeck.deck_id}/shuffle`)
    .then(({ data }) => {
      return data;
    })
}
