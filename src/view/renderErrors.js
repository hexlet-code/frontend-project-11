export default (elements, err) => {
    if(err.url){
        elements.inputUrl.classList.add('is-invalid');
        elements.feedbackError.textContent = err.url;
    }
    else {
        elements.inputUrl.classList.remove('is-invalid');
        elements.feedbackError.textContent = '';
    }
}
