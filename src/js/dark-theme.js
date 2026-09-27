const themeToggle = document.querySelector('.header__theme-toggle')
const body = document.body

themeToggle.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
  }
})