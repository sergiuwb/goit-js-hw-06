const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const inputNumber = document.querySelector('#controls>input')
const boxes = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elemToAdd = []
  for (let i = 0; i < amount; i++) {
    
    const div = document.createElement('div')
    div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    elemToAdd.push(div)
  }
  return elemToAdd
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumber.value)
  boxes.append(...boxesToAdd)
})

console.log(inputNumber.value)

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})