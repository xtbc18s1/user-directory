const form = document.querySelector('form#userForm')

function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'

  return colorDiv
}

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.textContent = `${label}: ${value}`
  return item
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value

  const users = document.querySelector('#users')

  const list = document.createElement('ul')


  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
  colorItem.appendChild(renderColor(favoriteColor))

  list.appendChild(renderListItem('Name', userName))
  list.appendChild(renderListItem('Age', age))
  list.appendChild(colorItem)

  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)
