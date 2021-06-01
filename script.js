let menuBtn = document.querySelector(".hamburg");
let closeMenuBtn = document.querySelector(".close-x");
let menuShade = document.querySelector("div.mobile-nav");

menuBtn.addEventListener("click", () => {
  menuShade.classList.add("show");
  console.log("click menu");
});

closeMenuBtn.addEventListener("click", () => {
  menuShade.classList.remove("show");
  console.log("click close menu");
});
