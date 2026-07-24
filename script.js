const grid = document.getElementById("brandsGrid");
const button = document.getElementById("hiddencontent");
const img = button.querySelector("img");
const buttonText = button.querySelector("span");

button.addEventListener("click", () => {
  grid.classList.toggle("open");

  if (grid.classList.contains("open")) {
    img.src = "./images/up.svg";
    buttonText.innerText = "Скрыть";
  } else {
    img.src = "./images/down.svg";
    buttonText.innerText = "Показать все";
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: { el: ".swiper-pagination", type: "bullets" },
});
