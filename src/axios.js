import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://studenback-697cdf6875f8.herokuapp.com', // L'URL du backend Laravel
});

export default instance;
