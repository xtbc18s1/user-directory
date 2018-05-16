const form = document.querySelector('#userForm')

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
  const f = ev.target
  const user = {
    userName: f.userName.value,
    age: f.age.value,
    favoriteColor: renderColor(f.favoriteColor.value),
  }

  const list = document.createElement('ul')

  const labels = Object.keys(user)
  labels.forEach(function(label) {
    const item = renderListItem(label, user[label])
    list.appendChild(item)
  })


  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
