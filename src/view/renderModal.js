
export default (elements, post) => {
 const {title, description, link} = post;

 elements.modal.title.textContent = title;
 elements.modal.content.textContent = description;
 elements.modal.buttonRead.setAttribute('href', link);

 document.body.classList.add('modal-open');
 document.body.setAttribute('style', 'overflow: hidden; padding-right: 17px;');

 elements.modal.container.classList.add('show');
 elements.modal.container.setAttribute('style', 'display: block');

}