const inputChange = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputChange.addEventListener('input', e => {
    spanText.style.fontSize = `${e.target.value}px`
})