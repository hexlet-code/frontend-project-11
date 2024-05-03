import axios from 'axios';

export default (url) => axios.get(url)
  .then((response) => response)
  .catch((error) => {
    error.type = 'networkError';
    error.message = 'errors.network';
    throw error;
  });
