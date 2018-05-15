const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const users = document.querySelector('#users')
  users.textContent += ' ' + userName
  form.userName.value = ''
}

form.addEventListener('submit', handleSubmit)
