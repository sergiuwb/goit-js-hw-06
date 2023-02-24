const correctInput = document.querySelector('#validation-input')

correctInput.addEventListener('blur', e => {
    if (e.target.value.trim().length == correctInput.getAttribute('data-length')) {
        correctInput.classList.add('valid')
            if (correctInput.classList.contains('invalid')) {
                correctInput.remove('invalid')
            }
    } else {
        if (correctInput.classList.contains('valid')) {
            correctInput.classList.remove('valid')
        }
        correctInput.classList.add('invalid')
    }
})