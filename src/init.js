import validate from './utilites/validate.js';
import axios from 'axios';
import parse from './utilites/parse.js';
import _ from 'lodash';
import render from './view/render.js';
import onChange from 'on-change';
import createProxy from './utilites/createProxy.js';

export default (defaultConfigState, elements, i18n) => {
  
    const state = {...defaultConfigState};

    const watchState = onChange(state, render(state, elements));

    // handleInput(state, elements.fields.inputUrl);

    elements.form.addEventListener('submit', (event) => {
        
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const url = formData.get('url');
        const {loadedChannels} = state;

        validate({url}, loadedChannels, i18n)
        .then((err)=> {
            watchState.form.errors = err;

                if(_.isEmpty(err)) {
                    watchState.signupProcess.processState = 'sending';
                    const link = url;
                    const proxyUrl = createProxy(link);
                    return axios.get(proxyUrl)
                }
            } 
        )
        .then((response) => {
            //вложенность ифов плохая практика, надо придумать как упростить
            if(response.data.status.http_code !== 200){
                console.log('ошибка ответа сервера');
                return;
            }
            console.log('запрос выполнен');
            loadedChannels.push(url);
            //првоерку на новые данные не буду реализовывать на уровне парсера, потому что функция парсер должна выполнять
            //1 простое действие и не стоит ее усложнять
            const parser = parse(response);
            console.log(parser);
            //тут присвоить id???
            watchState.channels.feeds.push(parser.feeds);
            watchState.channels.posts.push(...parser.posts);
        })
        .catch((err) => {
            console.log('err')
            console.log(err)
        });
});

};