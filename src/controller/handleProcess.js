
export default (elements, process, prevprocess) => {
    
    switch(process) {
        case 'loading': {
            elements.submitButton.classList.add('disabled');
            break;
        }
        case 'sent': {
            elements.submitButton.classList.remove('disabled');
            break;
        }
        default: 
            console.log('Не обработанный процесс');
            break;
    }
}