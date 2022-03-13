// Generate new card id using axios

// import axios from 'axios';
const axios = require('axios');

// export default
function newCard() {
  return axios
    .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(({ data }) => {
      console.log(data);
    });
}

// newCard();
