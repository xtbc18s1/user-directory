const button = document.querySelector('button')
button.addEventListener('click', handleClick)

function handleClick() {
  const heading = document.querySelector('h1')
  heading.textContent = 'Click!'
}
