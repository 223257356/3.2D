
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token,
    }
  })

export default instance;