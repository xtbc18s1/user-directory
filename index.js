const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  users.innerHTML += '<p>' + userName + ', ' + age + '</p>'

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
