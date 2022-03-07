import axios from 'axios';

export default function drawCard(deck) {
    return axios
      .get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
      .then(({ data }) => {
        return data;
      })
  }