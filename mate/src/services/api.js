// this file get data from api
// using axios

// import axios from 'axios';
const axios = require("axios").default;

// axios.create is a function that returns an instance of axios.
const api = axios.create({
  
      // baseURL is the url that we want to use.
    baseURL: 'https://jsonplaceholder.typicode.com'
  })

export default api;