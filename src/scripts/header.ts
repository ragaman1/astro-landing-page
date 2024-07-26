import MicroModal from "micromodal";
import invariant from "tiny-invariant";

const menuModalId = "menu-modal";

const header = document.querySelector("#page-header") as HTMLElement;
const page = document.documentElement;
const menu = document.querySelector(`#${menuModalId} ul`);
const openNavButton = document.querySelector("#open-nav-button");
const closeNavButton = document.querySelector("#close-nav-button");

invariant(header, "header should not be null");
invariant(menu, "menu should not be null");
invariant(openNavButton, "openNavButton should not be null");
invariant(closeNavButton, "closeNavButton should not be null");

const openMenu = () => {
  MicroModal.show(menuModalId, { disableScroll: true });
};

const closeMenu = () => {
  MicroModal.close(menuModalId);
};

openNavButton.addEventListener("click", openMenu);
closeNavButton.addEventListener("click", closeMenu);

document.addEventListener("scroll", () => {
  const d = page.clientHeight - page.scrollTop - header.offsetHeight;
  header.classList.toggle("fixed-header", d < 0);
});

menu.addEventListener("click", (event) => {
  if ((event.target as HTMLElement).tagName === "A") {
    closeMenu();
  }
});
