export default (elements, process) => {
  switch (process) {
    case 'loading': {
      elements.submitButton.classList.add('disabled');
      break;
    }
    case 'sent': {
      elements.submitButton.classList.remove('disabled');
      break;
    }
    case 'filling': {
      // затычка под ввод
      break;
    }
    default:
      console.log(`Не обработанный процесс, в обработчике процессов: ${process}`);
      break;
  }
};
