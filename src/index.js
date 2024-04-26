import './scss/styles.scss'
import init from './init'
import resources from './locales/resources.js';
import i18next from 'i18next';

//сборник элементов
const elements = {
    form: document.querySelector('form'),
    inputUrl: document.querySelector('#url-input'),
    submitButton: document.querySelector('button'),
    feedbackError: document.querySelector('.feedback'),
    feeds: document.querySelector('.feeds'),
    posts: document.querySelector('.posts'),
}

//состояние по умолчанию
const state = {
    signupProcess: {
        processState: 'filling',
        processError: null,
    },
    form: {
        valid: false,
        fields: {
            inputUrl: '',
        },
        errors: {},
    },
    channels: {
        feeds: [],
        posts: [],
    },
    // uiChannels: {
    //     feeds: [{id: 1, description: 'sdfs'}],
    //     posts: [
    //         {
    //         idFeed: 1, 
    //         posts: [{title: 'title', 
                // link: 'link', 
                // desc: 'desc', 
                // id: 221, 
                // visited: false, 
                // viewing: false}]
    //     }],

    // },

    // uiState: {
    //     idVisitedLink: 1,
    //     idViewingLink: 1,
    // },
    //где хранить ошибку?
    loadedChannels: [],
    errorsNetwork: [],
    lng: 'ru',
};

//при каждой инициализации приложения у меня будет создаваться новый обьект локализации
const i18n = i18next.createInstance();
i18n.init({
  lng: state.lng,
  debug: false,
  resources,
})  
.catch((e) => {
    console.log(e);
    console.error('ошибка локали')
});

init(state, elements, i18n);
