const button = document.querySelector('button.greeting')

function changeText(ev) {
  const heading = document.querySelector('.changeThisOne')
  heading.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)
