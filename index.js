const button = document.querySelector('button.greeting')

const changeText = function(ev) {
  const heading = document.querySelector('.changeThisOne')
  heading.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)
