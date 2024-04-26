// const toggleControlElements = (elements, bloking = true) => {
//     elements.form.disabled  = bloking;
//     elements.submitButton.disabled = bloking;
//     // elements.submitButton.classList.add('disabeled');
//     // elements.submitButton.setAttribute('disabeled', 'disabeled');
//   }

export default (elements, process, prevprocess) => {
    
    switch(process) {
        case 'sending': {
            // elements.inputUrl.disabled  = true;
            // console.log(elements.submitButton);
            elements.submitButton.disabled = true;
            break;
        }
        case 'sent': {
            // elements.inputUrl.disabled  = false;
            elements.submitButton.disabled = false;
            break;
        }
    }
}