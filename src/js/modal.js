import { cards } from "./cards.js";
const cardList = document.querySelector(".menu__list");
const modal = document.querySelector(".modal");
let totalPrice;
let additivesPrice = 0
let sizePrice;

const getModalMarkup = (item, src) => {
  return `
        <div class="modal__card">
          <div class="modal__img">
            <img src="${src}" alt="${item.name} photo" />
          </div>
          <div class="modal__wrap">
            <h2 class="modal__title">${item.name}</h2>
            <p class="modal__description">${item.description}</p>
            <p class="modal__subtitle">Size</p>
            <ul class="modal__size-list">
              <li class="modal__item modal__item--active" data-size="s"><span class="modal__item-size">S</span> ${
                item.sizes.s.size
              }</li>
              <li class="modal__item" data-size="m"><span class="modal__item-size">M</span> ${
                item.sizes.m.size
              }</li>
              <li class="modal__item" data-size="l"><span class="modal__item-size">L</span>${
                item.sizes.l.size
              }</li>
            </ul>
            <p class="modal__subtitle">Additives</p>
            <ul class="modal__additives-list">
                ${item.additives
                  .map(
                    (el, i) => `<li class="modal__item">
                <span class="modal__item-size">${i + 1}</span>
                ${el.name}
                </li>`,
                  )
                  .join("")}
            </ul>
            <p class="modal__price"><span>Total:</span><span>$${
              item.price
            }</span></p>
            <span class="modal__message">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</span>
            <button class="modal__close">Close</button>
          </div>
        </div>
      `;
};

cardList?.addEventListener("click", (evt) => {
  let modalElem;
  if (evt.target !== cardList) {
    modalElem =
      evt.target instanceof HTMLLIElement
        ? evt.target
        : evt.target.parentElement instanceof HTMLLIElement
          ? evt.target.parentElement
          : evt.target.parentElement.parentElement;
  }

  let card;
  if (cards.find((card) => card.id === modalElem.id)) {
    card = cards.find((card) => card.id === modalElem.id);
    sizePrice = Number(card.price)
  }

  modal.insertAdjacentHTML(
    "beforeend",
    getModalMarkup(card, modalElem.children[0].src),
  );
  document.body.classList.add("body-active--modal");
  modal.classList.add("modal--show");

  modal.querySelector(".modal__close").addEventListener("click", () => {
    modal.classList.remove("modal--show");
    modal.children[0].remove();
    document.body.classList.remove("body-active--modal");
    totalPrice = sizePrice
  });

  const sizes = [...modal.querySelector(".modal__size-list").children];

  modal.querySelector(".modal__size-list").addEventListener("click", (evt) => {
    sizes.forEach((el) => el.classList.remove("modal__item--active"));
    if (!evt.target.classList.contains("modal__item--active")) {
      
      evt.target.classList.add("modal__item--active");
      console.log(totalPrice);
      
      
      sizePrice = Number(card.price) + Number(
          card.sizes[evt.target.textContent[0].toLowerCase()]["add-price"],
        );

      totalPrice = sizePrice + additivesPrice
      
      modal.querySelector(".modal__price").children[1].textContent =
        `$${totalPrice.toString().length === 3 ? totalPrice + "0" : totalPrice + ".00"}`;
    } 
  });

  modal
    .querySelector(".modal__additives-list")
    .addEventListener("click", (evt) => {

      if (!evt.target.classList.contains("modal__item--active")) {
        evt.target.classList.add("modal__item--active");
        additivesPrice += 0.50
      } else if (evt.target.classList.contains("modal__item--active")) {
        evt.target.classList.remove("modal__item--active");
        additivesPrice -= 0.50
      }
       
      totalPrice = sizePrice + additivesPrice

      modal.querySelector(".modal__price").children[1].textContent =
        `$${(totalPrice).toString().length === 3 ? totalPrice + "0" : totalPrice + ".00"}`;
      
    });
});

