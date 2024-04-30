export default (elements, err) => {
  const { inputUrl, feedbackError } = elements;

  inputUrl.classList.remove('is-invalid');
  feedbackError.textContent = '';
  feedbackError.classList.add('text-danger');

  inputUrl.classList.add('is-invalid');
  feedbackError.textContent = err;
};
