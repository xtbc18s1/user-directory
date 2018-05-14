const button = document.querySelector('button.greeting')

function changeText(ev) {
  ev.target.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)
