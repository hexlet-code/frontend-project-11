import validate from './util/validate.js';
import axios from 'axios';
import parse from './util/parse.js';
import _ from 'lodash';
import render from './view/render.js';
import onChange from 'on-change';
import createProxy from './util/createProxy.js';
import updatePost from './util/updatePost.js';

export default (defaultConfigState, elements, i18n) => {
  
    const state = {...defaultConfigState};

    const watchState = onChange(state, render(state, elements));

    elements.modal.btnClose.forEach((btn) => btn.addEventListener('click', () => {
        document.body.classList.remove('modal-open');
        document.body.style = '';
        
        elements.modal.container.classList.remove('show');
        elements.modal.container.style.display = 'none';
    }));

    elements.form.addEventListener('submit', (event) => {
        
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const url = formData.get('url');
        const {loadedChannels} = state;
        
        if(watchState.signupProcess.processState === 'loading') return;
        validate({url}, loadedChannels, i18n)
        .then((err)=> {
            // watchState.form.errors = err;

            // if(!_.isEmpty(err) || watchState.signupProcess.processState === 'loading') return;

            watchState.signupProcess.processState = 'loading';
            
            const proxyUrl = createProxy(url);
            return axios.get(proxyUrl)
                
            } 
        )
        .then((response) => {
           
            loadedChannels.push(url);
            
            const parseData = parse(response);
            const idFeed = _.uniqueId();
            parseData.feeds.idFeed = idFeed;
            const posts = parseData.posts.map((post) => ({...post, id: _.uniqueId(), idFeed}));
            
            watchState.channels.feeds.push(parseData.feeds);
            watchState.channels.posts.unshift(...posts);
            return idFeed;
            
        })
        .finally(() => {
            watchState.signupProcess.processState = 'sent';
        })
        .then((id) => {
            updatePost(watchState, url, id);
            watchState.form.errors = i18n.t('uploaded');
        })
        .catch((err) => {
            watchState.form.errors = i18n.t(err.message);
        })  

});

};