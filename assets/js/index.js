const bgColors = ["#29BF12", "#ABFF4F", "#08BDBD", "#F21B3F", "#FF9914"];
const body = document.body;
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu_item");
const topBorder = menu.querySelector(".menu_top_border");
let activItem = menu.querySelector(".active");

body.style.setProperty("--bg-color", /*bgColors[0]*/ "#B4F8C8");
// activItem.style.setProperty("--item-bg-colors", bgColors[0]);
function itemClickFunction(item, index) {
  if (activItem) activItem.classList.remove("active");
  activItem = item;
  body.style.backgroundColor = bgColors[index];
  activItem.style.setProperty("--item-bg-colors", bgColors[index]);
  item.classList.add("active");
  moveBorder(activItem);
}

function moveBorder(activItem) {  

  let move =
    activItem.getBoundingClientRect().left -
    menu.offsetLeft -
    topBorder.offsetWidth / 2 +
    activItem.offsetWidth / 2;
  topBorder.style.setProperty("--translate-transform", `${move}px`);
}

  if (!activItem) {
    topBorder.style.setProperty(
      "--translate-transform",
      `0, ${topBorder.offsetHeight }px`
    );
  } 


menuItems.forEach((item, index) =>
  item.addEventListener("click", () => itemClickFunction(item, index))
);
