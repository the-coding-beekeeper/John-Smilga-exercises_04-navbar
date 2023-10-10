menuEl = document.querySelector(".pop-up");
menuBtnEl = document.querySelector("#menu");

document.addEventListener("click", (e) => {
if (e.target == menuBtnEl) {
  menuEl.classList.toggle("pop-up-active");
}
});


