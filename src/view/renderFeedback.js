export default (elements, message) => {
  const { form, feedbackError } = elements;
  form.reset();
  feedbackError.classList.remove('text-danger');
  feedbackError.classList.add('text-success');
  feedbackError.textContent = message;
};
