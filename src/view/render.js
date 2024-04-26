import renderErrors from "./renderErrors";
import handleProcess from "../controller/handleProcess";
import renderPosts from "./renderPosts";
import renderFeed from "./renderFeed";

export default (state, elements) => (process, newProcess, prevProcess) => {
    switch(process){
        case 'form.errors': {
            renderErrors(elements, newProcess);
            break;
        }
        case 'signupProcess.processState': {
            handleProcess(elements, newProcess, prevProcess);
            break;
        }
        case 'channels.posts': {
            renderPosts(elements.posts, newProcess, prevProcess);
            break;
        }
        case 'channels.feeds': {
            renderFeed(elements.feeds, newProcess, prevProcess);
            break;
        }
        case 'loadedChannels': {
            break;
        }
        default: {
            console.log(`'Не обработанный процесс в слое view. Процесс: ${process}'`);
            break;
        }
    }
}