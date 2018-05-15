const button = document.querySelector('button')
const handleClick = function() {
  const heading = document.querySelector('#dayHeading')
  heading.textContent = 'Click!'
}

button.addEventListener('click', handleClick)
