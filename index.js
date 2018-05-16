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
  item.textContent = `${label}: `
  try {
    item.appendChild(value)
  } catch(e) {
    item.textContent += value
  }
  return item
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = renderColor(form.favoriteColor.value)

  const users = document.querySelector('#users')

  const list = document.createElement('ul')

  list.appendChild(renderListItem('Name', userName))
  list.appendChild(renderListItem('Age', age))
  list.appendChild(renderListItem('Favorite Color', favoriteColor))

  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)
