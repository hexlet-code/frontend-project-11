export default (elements, message) => {
  const { form, feedbackError, inputUrl } = elements;
  form.reset();
  inputUrl.classList.remove('is-invalid');
  feedbackError.classList.remove('text-danger');
  feedbackError.classList.add('text-success');
  feedbackError.textContent = message;
};
