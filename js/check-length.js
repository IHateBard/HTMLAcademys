const isValidLength = (string, maxLength) => {
    if (string.length > maxLength) {
        console.log('Длина не подходит')
        return false;
    }
    return true;
};

const checkLength = (element, maxLength) => {
    const inputComment = element;
    inputComment.addEventListener('input', () => {
        const commentText = inputComment.value;
        const isValid = isValidLength(commentText, maxLength)
  
        if (isValid) {
         console.log('Длина подходит')
        }
    });
};

export {checkLength};