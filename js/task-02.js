const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')
const newArray = []

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.className = 'item'
  newArray.push(item)
})

list.append(...newArray)