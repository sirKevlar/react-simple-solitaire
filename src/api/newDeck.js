// Generate new deck id using axios

// import axios from 'axios';
const axios = require('axios');

// export default
function newDeck() {
  return axios
    .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(({ data }) => {
      console.log(data);
    });
}

newDeck();
