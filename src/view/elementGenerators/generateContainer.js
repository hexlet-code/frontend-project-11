export default (parantContainer, content) => {
  if (parantContainer.innerHTML !== '') return parantContainer.querySelector('ul');

  const container = document.createElement('div');
  container.classList.add('card', 'border-0');

  const title = document.createElement('div');
  title.classList.add('card-body');

  const heading = document.createElement('h2');
  heading.classList.add('card-title', 'h4');
  heading.textContent = content;
  title.append(heading);

  const list = document.createElement('ul');
  list.classList.add('list-group', 'border-0', 'rounded-0');

  container.append(title, list);
  parantContainer.append(container);

  return list;
};
