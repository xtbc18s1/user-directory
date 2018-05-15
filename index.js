const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const heading = document.querySelector('h1')
  const f = ev.target
  const userName = f.userName.value
  heading.textContent = userName
}

form.addEventListener('submit', handleSubmit)
