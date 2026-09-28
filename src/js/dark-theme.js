const themeToggle = document.querySelector('.header__theme-toggle')
const body = document.body
const link = document.querySelector('.header__link')
const header = body.querySelector('.header')
const btn = header.querySelector('.header__btn')

themeToggle.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    body.classList.add('dark')
    link.classList.add('header__link--dark')
    header.classList.add('header--dark')
    btn.classList.add('header__btn--dark')
  } else {
    body.classList.remove('dark')
    link.classList.remove('header__link--dark')
    header.classList.remove('header--dark')
    btn.classList.remove('header__btn--dark')
  }
})