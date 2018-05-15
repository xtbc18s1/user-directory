const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const heading = document.querySelector('h1')
  const input = document.querySelector('input')
  heading.textContent = input.value
}

form.addEventListener('submit', handleSubmit)
