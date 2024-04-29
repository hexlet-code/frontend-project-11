import generateContainer from "./elementGenerators/generateContainer";
import renderModal from "./renderModal";

export default (elements, state, posts) => {

const defaultClassItem = ['list-group-item' ,'d-flex' ,'justify-content-between', 'align-items-start', 'border-0', 'border-end-0'];
const defaultClassButton = ['btn' ,'btn-outline-primary' ,'btn-sm'];

const createItems = (items) => items.map(({title, description, link, id}) => {

    const containerItem = document.createElement('li');
    containerItem.classList.add(...defaultClassItem);

    const linkItem = document.createElement('a');
    linkItem.setAttribute('href', link);
    linkItem.setAttribute('data-id', id);
    linkItem.setAttribute('target', '_blank');
    linkItem.setAttribute('rel', 'noopener noreferrer');
  
    const isLinkVisited = (id) => state.uiState.idVisitedLink.includes(id) ? ['fw-normal', 'link-secondary'] : ['fw-bold'];
    linkItem.classList.add(...isLinkVisited(id));
    linkItem.textContent = title;
    
    linkItem.addEventListener('click', () => {
        linkItem.classList.remove('fw-bold');
        linkItem.classList.add('fw-normal', 'link-secondary');
        state.uiState.idVisitedLink.push(id);
    })

    const buttomItem = document.createElement('button');
    buttomItem.setAttribute('type', 'button');
    buttomItem.setAttribute('data-id', id);
    buttomItem.setAttribute('data-bs-toggle','modal');
    buttomItem.setAttribute('data-bs-target', '#modal');
    buttomItem.classList.add(...defaultClassButton);
    buttomItem.textContent = 'Просмотр';

    buttomItem.addEventListener('click', (e) => {
        linkItem.classList.remove('fw-bold');
        linkItem.classList.add('fw-normal', 'link-secondary');
        state.uiState.idVisitedLink.push(id);
        renderModal(elements, {title, description, link})
    })

    containerItem.append(linkItem, buttomItem);

    return containerItem;
})

const containerItems = generateContainer(elements.posts, 'Посты');

const listPosts = createItems(posts);

containerItems.replaceChildren(...listPosts);
}