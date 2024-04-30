import axios from 'axios';
import { uniqueId } from 'lodash';
import onChange from 'on-change';
import validate from './util/validate.js';
import parse from './util/parse.js';
import render from './view/render.js';
import createProxy from './util/createProxy.js';
import updatePost from './util/updatePost.js';
import renderFeedback from './view/renderFeedback.js';

export default (defaultConfigState, elements, i18n) => {
  const state = { ...defaultConfigState };

  const watchState = onChange(state, render(state, elements));

  // тут вешаю обработчики на кнопки закрытия модели
  elements.modal.btnClose.forEach((btn) => btn.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.body.style = '';
    const { container } = elements.modal;
    container.classList.remove('show');
    container.style.display = 'none';
  }));

  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const url = formData.get('url');
    const { loadedChannels } = state;
    const proxyUrl = createProxy(url);

    if (watchState.signupProcess.processState !== 'loading') {
      validate({ url }, loadedChannels)
        .then(() => {
          watchState.signupProcess.processState = 'loading';
          return axios.get(proxyUrl);
        })
        .then((response) => {
          const parseData = parse(response);
          loadedChannels.push(url);
          const idFeed = uniqueId();
          parseData.feeds.idFeed = idFeed;
          const posts = parseData.posts.map((post) => ({ ...post, id: uniqueId(), idFeed }));

          watchState.feeds.unshift(parseData.feeds);
          watchState.posts.unshift(...posts);
          return idFeed;
        })
        .finally(() => {
          watchState.signupProcess.processState = 'sent';
          watchState.signupProcess.processState = 'filling';
        })
        .then((id) => {
          updatePost(watchState, proxyUrl, id);
          renderFeedback(elements, i18n.t('uploaded'));
        })
        .catch((err) => {
          watchState.form.errors = i18n.t(err.message);
        });
    }
  });
};
