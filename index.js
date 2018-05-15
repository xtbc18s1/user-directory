const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const users = document.querySelector('#users')
  users.innerHTML += '<p>' + userName + '</p>'
  form.userName.value = ''
}

form.addEventListener('submit', handleSubmit)
