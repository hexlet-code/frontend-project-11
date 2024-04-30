import axios from 'axios';
import _ from 'lodash';
import parse from './parse';

const intervalRequestServer = 5000;

const delay = (ms) => new Promise((resolve) => {
  const id = setTimeout(() => resolve(id), ms);
});

const updatePost = (state, proxyUrl, idFeed) => delay(intervalRequestServer)
  .then(() => axios.get(proxyUrl))
  .then((response) => {
    const parseData = parse(response);
    const prevPost = state.posts.filter((post) => idFeed === post.idFeed);

    const filterPosts = ({ title }) => (prevPost.filter((pst) => pst.title === title)).length === 0;

    const newPost = parseData.posts.find(filterPosts);

    if (newPost) state.posts.unshift({ ...newPost, id: _.uniqueId, idFeed });
  })
  .finally(() => updatePost(state, proxyUrl, idFeed))
  .catch(() => {
    console.log('Не удалось получить ответ сервера');
  });

export default updatePost;
