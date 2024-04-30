import generateContainer from "./elementGenerators/generateContainer";
import renderModal from "./renderModal";

export default (elements, state, posts) => {

const defaultClassItem = ['list-group-item' ,'d-flex' ,'justify-content-between', 'align-items-start', 'border-0', 'border-end-0'];
const defaultAttrItem = {
    'target': '_blank',
    'rel': 'noopener noreferrer'
}

const defaultClassButton = ['btn' ,'btn-outline-primary' ,'btn-sm'];
const defaultAttrButton = {
    'type': 'button',
    'data-bs-toggle': 'modal',
    'data-bs-target': '#modal',
}

const addAttrElement = (element, attr) => Object.entries(attr).forEach(([key, value]) => element.setAttribute(key, value))

const createItems = (items) => items.map(({title, description, link, id}) => {

    const containerItem = document.createElement('li');
    containerItem.classList.add(...defaultClassItem);

    const linkItem = document.createElement('a');
    addAttrElement(linkItem, {...defaultAttrItem, 'href': link, 'data-id': id})
    const isLinkVisited = (id) => state.uiState.idVisitedLink.includes(id) ? ['fw-normal', 'link-secondary'] : ['fw-bold'];//переписать
    linkItem.classList.add(...isLinkVisited(id));
    linkItem.textContent = title;
    
    linkItem.addEventListener('click', () => {
        linkItem.classList.remove('fw-bold');
        linkItem.classList.add('fw-normal', 'link-secondary');
        state.uiState.idVisitedLink.push(id);
    })

    const buttomItem = document.createElement('button');
    addAttrElement(buttomItem, {...defaultAttrButton, 'data-id': id})
    buttomItem.classList.add(...defaultClassButton);
    buttomItem.textContent = 'Просмотр';

    buttomItem.addEventListener('click', (e) => {

        linkItem.classList.remove('fw-bold');
        linkItem.classList.add('fw-normal', 'link-secondary');
        state.uiState.idVisitedLink.push(id);
        //тут идет прямое нарушение архитектуры renderModal должен тянуть данные только из state а не из элемента (сделано для упрощения);
        renderModal(elements, {title, description, link})
    })

    containerItem.append(linkItem, buttomItem);

    return containerItem;
})

const containerItems = generateContainer(elements.posts, 'Посты');

const listPosts = createItems(posts);

containerItems.replaceChildren(...listPosts);
}