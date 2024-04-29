export default (elements, err) => {
    elements.inputUrl.classList.remove('is-invalid');
    elements.feedbackError.textContent = '';
    elements.feedbackError.classList.add('text-danger');

  if(err === 'RSS успешно загружен') {
    elements.form.reset();
    elements.feedbackError.classList.remove('text-danger');
    elements.feedbackError.classList.add('text-success');
    elements.feedbackError.textContent = err;
    return;
  }
  elements.inputUrl.classList.add('is-invalid');
  elements.feedbackError.textContent = err;
    
}
