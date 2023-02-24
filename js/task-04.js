let counterValue = 0;

const displayCounter = document.querySelector('#value')
const minus = document.querySelector('button[data-action="decrement"]')
const plus = document.querySelector('button[data-action="increment"]')

minus.addEventListener('click', () => {
    counterValue--
    displayCounter.textContent = counterValue
})

plus.addEventListener('click', () => {
    counterValue++
    displayCounter.textContent = counterValue
})