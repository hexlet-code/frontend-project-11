import axios from 'axios';

export default (url) => axios.get(url)
  .then((response) => response)
  .catch((err) => {
    err.type = 'networkError';
    err.message = 'errors.network';
    throw err;
  });
