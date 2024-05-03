import axiosGetter from './axiosGetter';
import _ from 'lodash';
import parse from './parse';

const intervalRequestServer = 5000;

const delay = (ms) => new Promise((resolve) => {
  const id = setTimeout(() => resolve(id), ms);
});


const updatePost = (state, proxyUrl, idFeed) => delay(intervalRequestServer)
  .then(() => axiosGetter(proxyUrl))
  .then((response) => {
    const parseData = parse(response);

    const prevPost = state.posts.filter((post) => idFeed === post.idFeed);

    const filterPosts = ({ title }) => prevPost.some((pst) => pst.title === title);

    const newPost = parseData.posts.find(filterPosts);

    if (newPost) state.posts.unshift({ ...newPost, id: _.uniqueId, idFeed });
  })
  .finally(() => updatePost(state, proxyUrl, idFeed))
  .catch(() => {
    const err = new Error('Network Error');
    console.error(err);
  });

export default updatePost;
