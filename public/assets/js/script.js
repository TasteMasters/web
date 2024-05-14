import headerLogin from "./components/header-login.js";
import main from "./components/main.js";
import footer from "./components/footer.js";
import footerAnimation from "./animation/footer-animation.js";
import menuMobile from "./animation/menu-mobile.js";
import handlePageContent from "./handlePageContent.js";
import { AuthController } from "./api/auth/auth.controller.js";

const urlBlackList = ["/pages/login.html", "/pages/registrar.html"];

export default async function createTemplate(page, content, id) {
  const body = document.querySelector("body");

  const headerElement = headerLogin(AuthController.isAuthenticated());
  const mainElement = main(content);
  const footerElement = footer();

  body.appendChild(mainElement);
  if (!urlBlackList.includes(page)) body.appendChild(footerElement);

  handlePageContent(page, id);
  
  //Animations
  if (!urlBlackList.includes(page)) footerAnimation();
  if (!urlBlackList.includes(page)) menuMobile();
}
