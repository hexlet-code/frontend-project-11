import './scss/styles.scss';
import i18next from 'i18next';
import init from './init';
import resources from './locales/resources.js';

// сборник элементов
const elements = {
  form: document.querySelector('form'),
  inputUrl: document.querySelector('#url-input'),
  submitButton: document.querySelector('.btn-lg'),
  feedbackError: document.querySelector('.feedback'),
  feeds: document.querySelector('.feeds'),
  posts: document.querySelector('.posts'),
  modal: {
    title: document.querySelector('.modal-title'),
    content: document.querySelector('.modal-body'),
    buttonRead: document.querySelector('.full-article'),
    btnClose: [document.querySelector('.btn.btn-secondary'), document.querySelector('.btn-close.close')],
    container: document.querySelector('.modal'),
  },
};

// состояние по умолчанию
const state = {
  signupProcess: {
    processState: 'filling',
    processError: null,
  },
  feeds: [],
  posts: [],
  uiState: {
    idVisitedLink: [],
  },
  loadedChannels: [],
  errors: null,
  lng: 'ru',
};

// при каждой инициализации приложения у меня будет создаваться новый обьект локализации
const i18n = i18next.createInstance();
i18n.init({
  lng: state.lng,
  debug: false,
  resources,
})
  .catch((e) => {
    console.log(e);
    console.error('ошибка локали');
  });

init(state, elements, i18n);
