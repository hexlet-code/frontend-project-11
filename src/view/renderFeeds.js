import generateContainer from './elementGenerators/generateContainer';

export default (elements, feeds) => {
  const defaultClassItem = ['list-group-item', 'border-0', 'border-end-0'];

  const createItems = (items) => items.map(({ title, description }) => {
    const containerItem = document.createElement('li');
    containerItem.classList.add(...defaultClassItem);

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('h6', 'm-0');
    itemTitle.textContent = title;

    const itemContent = document.createElement('p');
    itemContent.classList.add('m-0', 'small', 'text-black-50');
    itemContent.textContent = description;

    containerItem.append(itemTitle, itemContent);

    return containerItem;
  });

  const containerItems = generateContainer(elements.feeds, 'Фиды');

  const listPosts = createItems(feeds);

  containerItems.replaceChildren(...listPosts);
};
