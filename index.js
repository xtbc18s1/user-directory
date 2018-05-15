const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value

  const p = document.createElement('p')
  p.textContent = `${userName}, ${age}`

  users.appendChild(p)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
