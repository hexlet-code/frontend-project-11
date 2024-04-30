import parse from "./parse";
import axios from "axios";
import _ from "lodash";

const intervalRequestServer = 5000;

const delay = (ms) => new Promise((resolve) => {
    const id = setTimeout(() => resolve(id), ms)
 });

const updatePost = (state, proxyUrl, idFeed) => delay(intervalRequestServer)
.then(() => axios.get(proxyUrl))
.then((response) => {
//этот кусок изначально написан коряво из за организации структуры хранения данных
// Если бы структура была огранизована таким образом считаю было бы правильно но пришлось переписать много кода
// const state = {
//     feed: [{id: 'id фида', data: 'данные'}],
//     posts: [
//         {idFeed, listPost: [{id, data}]}
//     ]
// }
    const parseData = parse(response);
    const prevPost = state.posts.filter((post) => idFeed === post.idFeed);
    
    const filterPosts = ({title}) => (prevPost.filter((pst) => pst.title === title)).length === 0;

    const newPost = parseData.posts.find(filterPosts);

    if(newPost) state.posts.unshift({...newPost, id: _.uniqueId, idFeed});

})
.finally(() => updatePost(state, proxyUrl, idFeed))
.catch((e) => {
    console.log('Не удалось получить ответ сервера');
})

export default updatePost;
