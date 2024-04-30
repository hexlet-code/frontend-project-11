export default (elements, message) => {
    elements.form.reset();
    elements.feedbackError.classList.remove('text-danger');
    elements.feedbackError.classList.add('text-success');
    elements.feedbackError.textContent = message;
}