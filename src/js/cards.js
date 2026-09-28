import data from "./data.json";
// (function () {
const controls = document.querySelector(".menu__controls");
const cardList = document.querySelector(".menu__list");
const refresh = document.querySelector(".menu__refresh");
let filterDefault = "coffee";
export const cards = data.map(card => ({id: self.crypto.randomUUID(), ...card}))
let filterCards;
let step = 4;
let count = 0;

controls?.addEventListener("click", (evt) => {
  let prevFilter = filterDefault;
  [...controls.children].forEach((el) =>
    el.classList.remove("menu__btn--active"),
  );
  evt.target.classList.add("menu__btn--active");
  filterDefault = evt.target.getAttribute("id");
  if (filterDefault && filterDefault !== prevFilter) {
    count = 0;
    cardList.innerHTML = "";
    foo();
  }
});

function getMarkup(card, filter, index) {
  return `<li class="menu__item" id="${card.id}" data-item="${card.name}">
              <img src="../public/images/${filter}/${filter}-${index + 1}.png" alt="${
                card.name
              } photo" class="slider__image">
              <div class="menu__item-wrap">
                <h3 class="menu__title-item">${card.name}</h3>
                <p class="menu__description">${card.description}</p>
                <span class="menu__price">$${card.price}</span>    
              </div>                    
            </li>`;
}

function foo() {
  filterCards = cards
    .filter((el) => el.category === filterDefault)
    .map((el, i) => getMarkup(el, filterDefault, i));
  cardList?.insertAdjacentHTML("beforeend", filterCards.join(""));
  count += step;
  showRefresh();
}

foo();

refresh?.addEventListener("click", () => {
  count += step;
  showRefresh();
  [...document.querySelectorAll(".menu__item")].forEach(
    (el) => (el.style.display = "flex"),
  );
});

function showRefresh() {
  if (filterCards.length === count && filterDefault === "coffee") {
    refresh.classList.add("menu__refresh--none");
  } else if (filterCards.length === count && filterDefault === "tea") {
    refresh.classList.add("menu__refresh--none");
  } else if (filterCards.length === count && filterDefault === "dessert") {
    refresh.classList.add("menu__refresh--none");
  } else {
    refresh?.classList.remove("menu__refresh--none");
  }
}
// })();
