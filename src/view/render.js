import renderErrors from './renderErrors';
import handleProcess from '../controller/handleProcess';
import renderPosts from './renderPosts';
import renderFeeds from './renderFeeds';

export default (state, elements, i18n) => (process, newState) => {
  switch (process) {
    case 'errors': {
      renderErrors(elements, newState, i18n);
      break;
    }
    case 'signupProcess.processState': {
      handleProcess(elements, newState);
      break;
    }
    case 'posts': {
      renderPosts(elements, state, newState);
      break;
    }
    case 'feeds': {
      renderFeeds(elements, newState);
      break;
    }
    default: {
      console.log(`'Не обработанный процесс в слое view. Процесс: ${process}'`);
      break;
    }
  }
};
