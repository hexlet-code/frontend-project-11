import createProxy from "./createProxy"
import parse from "./parse";
import axios from "axios";
import _ from "lodash";

const updatePost = (state, url, idFeed) => delay(5000)
.then(() => {
    const proxyUrl = createProxy(url);
    return axios.get(proxyUrl);
})
.then((response) => {
    const parseData = parse(response);
    const prevPost = state.channels.posts.filter((post) => idFeed === post.idFeed);
    
    const filterPosts = ({title}) => (prevPost.filter((pst) => pst.title === title)).length === 0;

    const newPost = parseData.posts.find(filterPosts);

    if(newPost) state.channels.posts.unshift({...newPost, id: _.uniqueId, idFeed});

})
.finally(() => updatePost(state, url, idFeed))
.catch((e) => {
    console.log(e);
})


const delay = (ms) => new Promise((resolve) => {
   const id = setTimeout(() => resolve(id), ms)
});

export default updatePost;
