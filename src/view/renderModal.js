export default (elements, post) => {
  const { title: titlePost, description, link } = post;
  const {
    title, content, buttonRead, container,
  } = elements.modal;
  title.textContent = titlePost;
  content.textContent = description;
  buttonRead.setAttribute('href', link);

  document.body.classList.add('modal-open');
  document.body.setAttribute('style', 'overflow: hidden; padding-right: 17px;');

  container.classList.add('show');
  container.setAttribute('style', 'display: block');
};
