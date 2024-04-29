export default (btn) => btn.addEventListener('click', () => {
document.body.classList.remove('modal-open');
document.body.setAttribute('style', 'overflow: hidden; padding-right: 17px;');

elements.modal.container.classList.add('show');
elements.modal.container.setAttribute('style', 'display: block');
})
