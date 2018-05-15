const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const users = document.querySelector('#users')
  users.innerHTML += '<p>' + userName + ', ' + age + '</p>'
  form.reset()
}

form.addEventListener('submit', handleSubmit)
