const slider = document.querySelector(".slider");
const slides = document.querySelector(".slider__list");
const prev = document.querySelector(".slider__btn-prev");
const next = document.querySelector(".slider__btn-next");
const sliderToggle = document.querySelector(".slider__controls-line");
const toggleList = [...sliderToggle?.children];
const slidesList = [...slides?.children];
let count = 0;
let timer;

let timerFunc = () => {
  foo();
  timer = setTimeout(timerFunc, 5000);
};

timerFunc();

function foo() {
  count++;
  if (count === slidesList.length) {
    count = 0;
  }
  slidesList.forEach((el) => el.classList.remove("slider__item-show"));
  slidesList[count].classList.add("slider__item-show");

  toggleList.forEach((el) =>
    el.classList.remove("slider__controls-line--active"),
  );
  toggleList[count].classList.add("slider__controls-line--active");
}

function baz() {
  if (count === 0) {
    count = slidesList.length;
  }
  count--;
  slidesList.forEach((el) => el.classList.remove("slider__item-show"));
  slidesList[count].classList.add("slider__item-show");

  toggleList.forEach((el) =>
    el.classList.remove("slider__controls-line--active"),
  );
  toggleList[count].classList.add("slider__controls-line--active");
}

sliderToggle.addEventListener("click", (evt) => {
  slidesList.forEach((el) => el.classList.remove("slider__item-show"));

  const index = toggleList.findIndex((el) => el === evt.target);
  count = index;
  slidesList[index].classList.add("slider__item-show");
  toggleList.forEach((el) =>
    el.classList.remove("slider__controls-line--active"),
  );
  toggleList[index].classList.add("slider__controls-line--active");
});

prev?.addEventListener("click", () => {
  baz();
  timer.clearTimeout();
});

next?.addEventListener("click", () => {
  foo();
  timer.clearTimeout();
});
