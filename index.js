const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const heading = document.querySelector('h1')
  heading.textContent = userName
}

form.addEventListener('submit', handleSubmit)
