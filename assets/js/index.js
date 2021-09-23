const bgColors = ["#29BF12", "#ABFF4F", "#08BDBD", "#F21B3F", "#FF9914"],
  body = document.body,
  menu = body.querySelector(".menu"),
  menuItems = menu.querySelectorAll(".menu_item"),
  topBorder = menu.querySelector(".menu_top_border");
let activItem = menu.querySelector(".active"),
  declarationProperty = document.styleSheets[0].cssRules[0].style;

body.style.setProperty("--bg-color", "#B4F8C8");

function mooveBorder() {
  let moove =
    activItem.getBoundingClientRect().left -
    menu.offsetLeft -
    topBorder.offsetWidth / 2 +
    activItem.offsetWidth / 2;

  return moove;
}

if (!activItem) {
  topBorder.style.setProperty(
    "--translate-transform",
    `0, ${topBorder.offsetHeight}px`
  );
} else {
  activItem.style.setProperty("--item-bg-colors", "#B4F8C8");
  topBorder.style.setProperty("--translate-transform", `${mooveBorder()}px`);
}

function itemClickFunction(item, index) {
  declarationProperty.setProperty("--transition-duration", "1s");
  if (activItem) activItem.classList.remove("active");
  activItem = item;
  body.style.setProperty("--bg-color", `${bgColors[index]}`);
  activItem.style.setProperty("--item-bg-colors", bgColors[index]);
  item.classList.add("active");
  topBorder.style.setProperty("--translate-transform", `${mooveBorder()}px`);
}

menuItems.forEach((item, index) =>
  item.addEventListener("click", () => itemClickFunction(item, index))
);
