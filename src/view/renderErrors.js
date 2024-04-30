export default (elements, err) => {
    elements.inputUrl.classList.remove('is-invalid');
    elements.feedbackError.textContent = '';
    elements.feedbackError.classList.add('text-danger');

    elements.inputUrl.classList.add('is-invalid');
    elements.feedbackError.textContent = err;
    
}
