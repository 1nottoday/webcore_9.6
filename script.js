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


const brandsSwiper = new Swiper("#brandsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: "#brandsSwiper .swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

const repairsSwiper = new Swiper("#repairsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: "#repairsSwiper .swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

/*const btn = document.getElementById('menu-btn');
const menu = document.getElementById('sidebar');*/
