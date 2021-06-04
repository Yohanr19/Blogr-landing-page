const menuBtn = document.getElementById("icon-hamburger");
const menu = document.getElementsByClassName("menu");
const menuCloseBtn = document.getElementById("icon-close");
const arrows = document.getElementsByClassName("arrow");
arrows[1].parentElement.nextElementSibling;
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e) => {
    if (
      arrows[i].parentElement.nextElementSibling.style.visibility == "visible"
    ) {
      arrows[i].parentElement.nextElementSibling.style.position = "absolute";
      arrows[i].parentElement.nextElementSibling.style.visibility = "hidden";
      arrows[i].style.transform = "rotate(0deg)";
    } else {
      arrows[i].parentElement.nextElementSibling.style.position = "relative";
      arrows[i].parentElement.nextElementSibling.style.visibility = "visible";
      arrows[i].style.transform = "rotate(180deg)";
    }
  });
}
menuBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
function openMenu() {
  menu[0].style.visibility = "visible";
  menuBtn.style.display = "none";
  menuCloseBtn.style.display = "block";
}
function closeMenu() {
  wrapMenu();
  menu[0].style.visibility = "hidden";
  menuBtn.style.display = "block";
  menuCloseBtn.style.display = "none";
}
function wrapMenu() {
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].parentElement.nextElementSibling.style.position = "absolute";
    arrows[i].parentElement.nextElementSibling.style.visibility = "hidden";
    arrows[i].style.transform = "rotate(0deg)";
  }
}
window.addEventListener("resize", (e) => {
  if (window.innerWidth <= 899) {
    closeMenu();
    menu[0].style.visibility = "hidden";
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
  } else if (window.innerWidth > 899) {
    closeMenu();
    menu[0].style.visibility = "visible";
    menuBtn.style.display = "none";
  }
});
