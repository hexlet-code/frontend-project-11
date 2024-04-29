import renderErrors from "./renderErrors";
import handleProcess from "../controller/handleProcess";
import renderPosts from "./renderPosts";
import renderFeeds from "./renderFeeds";
import renderModal from "./renderModal";

export default (state, elements) => (process, newState, prevState) => {
    switch(process){
        case 'form.errors': {
            renderErrors(elements, newState);
            break;
        }
        // case 'errorsNetwork': {
        //     renderErrors(elements, newState, process);
        //     break;
        // }
        case 'signupProcess.processState': {
            handleProcess(elements, newState, prevState);
            break;
        }
        case 'channels.posts': {
            renderPosts(elements, state, newState);
            break;
        }
        case 'channels.feeds': {
            renderFeeds(elements, newState);
            break;
        }
        default: {
            console.log(`'Не обработанный процесс в слое view. Процесс: ${process}'`);
            break;
        }
    }
}