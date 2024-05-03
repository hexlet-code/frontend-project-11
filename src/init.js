import { uniqueId } from 'lodash';
import onChange from 'on-change';
import axiosGetter from './util/axiosGetter.js';
import validate from './util/validate.js';
import parse from './util/parse.js';
import render from './view/render.js';
import createProxy from './util/createProxy.js';
import updatePost from './util/updatePost.js';
import renderFeedback from './view/renderFeedback.js';

export default (defaultConfigState, elements, i18n) => {
  const state = { ...defaultConfigState };

  const watchState = onChange(state, render(state, elements, i18n));

  elements.modal.btnClose.forEach((btn) => btn.addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.body.style = '';
    const { container } = elements.modal;
    container.classList.remove('show');
    container.style.display = 'none';
  }));

  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (watchState.signupProcess.processState === 'loading') return;

    const formData = new FormData(event.target);
    const url = formData.get('url');
    const { loadedChannels } = state;
    const proxyUrl = createProxy(url);

    validate({ url }, loadedChannels)
      .then(() => {
        watchState.signupProcess.processState = 'loading';
        return axiosGetter(proxyUrl);
      })
      .then((response) => {
        const parseData = parse(response);
        const { feeds, posts } = parseData;
        loadedChannels.push(url);
        const idFeed = uniqueId();
        const indexedFeed = { ...feeds, idFeed };
        const indexedPost = posts.map((post) => ({ ...post, id: uniqueId(), idFeed }));

        watchState.feeds.unshift(indexedFeed);
        watchState.posts.unshift(...indexedPost);
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
        watchState.errors = err;
      });
  });
};
