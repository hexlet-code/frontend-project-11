


const createItem = (items) => items.map(({title, description, link}) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item' ,'border-0' ,'border-end-0');
    const heading = document.createElement('h3');

    heading.classList.add('h6', 'm-0');
    heading.textContent = title;

    const text = document.createElement('p');
    text.classList.add('m-0' ,'small' ,'text-black-50');
    text.textContent = description;

    li.append(heading, text);
    return li;
    
})

export default (element, newPosts, prevPosts) => {

const containerFeeds = document.createElement('div');
containerFeeds.classList.add('card' ,'border-0');

const titleFeeds = document.createElement('div');
titleFeeds.classList.add('card-body');

const headingFeeds = document.createElement('h2');
headingFeeds.classList.add('card-title' ,'h4');
headingFeeds.textContent = 'Фиды'; //переделать на i18n;
titleFeeds.append(headingFeeds);

const listFeeds = document.createElement('ul');
listFeeds.classList.add('list-group','border-0' ,'rounded-0');


containerFeeds.append(titleFeeds, listFeeds);

element.append(containerFeeds);

const feeds = createItem(newPosts);
listFeeds.append(...feeds);
}