const liveInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

liveInput.addEventListener('input', e => {
    output.textContent = e.target.value.trim()

    if(e.target.value.trim() === '') {
        output.textContent = "Anonymous"
    }
})