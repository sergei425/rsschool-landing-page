const menuBtn = document.querySelector(".header__btn");
const header = document.querySelector(".header");
const headerNav = header.querySelector(".header__nav");
const nav = header.querySelector(".nav");
const link = document.querySelector(".header__link");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("header__btn--active");
    nav.classList.toggle("nav--active");
    header.classList.toggle("header--show-menu");
    headerNav.classList.toggle("header__nav--show");
    link.classList.toggle("header__link--show-menu");
})


headerNav.addEventListener('click', (evt) => {
    if (evt.currentTarget === headerNav && evt.target instanceof HTMLAnchorElement) {
       menuBtn.classList.remove("header__btn--active");
       headerNav.classList.remove("header__nav--show");
       header.classList.remove("header--show-menu");
       link.classList.remove("header__link--show-menu");
    }
})

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 959px)").matches) {
        menuBtn.classList.remove("header__btn--active");
        headerNav.classList.remove("header__nav--show");
        header.classList.remove("header--show-menu");
        link.classList.remove("header__link--show-menu");
    }
});
