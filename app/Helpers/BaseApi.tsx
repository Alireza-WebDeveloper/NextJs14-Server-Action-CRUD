import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:5007',
});

export default baseApi;
