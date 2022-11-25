import { Router } from "./router.js";

const universeId = document.getElementById("uni");
const explorationId = document.getElementById("explore");

universeId.addEventListener("click", (event) => {
  document.body.classList.add("universe");
  document.body.classList.remove("exploration");
  event.preventDefault();
});

explorationId.addEventListener("click", (event) => {
  document.body.classList.add("exploration");
  document.body.classList.remove("universe");
  event.preventDefault();
});

const router = new Router();

router.add("/", "pages/home.html");
router.add("/universe", "pages/universe.html");
router.add("/exploration", "pages/exploration.html");
router.add(404, "pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
