export default (elements, err, i18n) => {
  const { inputUrl, feedbackError } = elements;

  inputUrl.classList.remove('is-invalid');
  feedbackError.textContent = '';
  feedbackError.classList.add('text-danger');
  if (err.type === 'formError') {
    inputUrl.classList.add('is-invalid');
    feedbackError.textContent = i18n.t(err.message);
  }
  if (err.type === 'networkError') {
    feedbackError.textContent = i18n.t(err.message);
  }
};
