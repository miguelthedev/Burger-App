import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-6b0a2.firebaseio.com/'
});

export default instance;