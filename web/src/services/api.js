import axios from 'axios';

const api = axios.create({
  baseURL: 'https://formula-tesla.herokuapp.com/',
})

export default api;