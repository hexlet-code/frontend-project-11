


const createItem = (items) => items.map(({title, description, link}) => {

   
    const li = document.createElement('li');
    li.classList.add('list-group-item' ,'d-flex' ,'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');

    const a = document.createElement('a');
    const button = document.createElement('button');
    li.append(a, button);

    a.outerHTML = `<a href="${link}" class="fw-bold" data-id="${1}" target="_blank" rel="noopener noreferrer" >${title}</a>`;
    // a.classList.add('fw-bold');

    // button.classList.add('btn', 'btn-outline-primary' ,'btn-sm');
    button.outerHTML = `<button type="button" class="btn btn-outline-primary btn-sm" data-id="${1}" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>`;
    
  
    return li;
    
})

export default (element, newPosts, prevPosts) => {

const containerFeeds = document.createElement('div');
containerFeeds.classList.add('card' ,'border-0');

const titleFeeds = document.createElement('div');
titleFeeds.classList.add('card-body');

const headingFeeds = document.createElement('h2');
headingFeeds.classList.add('card-title' ,'h4');
headingFeeds.textContent = 'Посты'; //переделать на i18n;
titleFeeds.append(headingFeeds);

const listFeeds = document.createElement('ul');
listFeeds.classList.add('list-group','border-0' ,'rounded-0');


containerFeeds.append(titleFeeds, listFeeds);

element.append(containerFeeds);

const posts = createItem(newPosts);
listFeeds.append(...posts);
}