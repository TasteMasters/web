import headerLogin from "./components/header-login.js";
import main from "./components/main.js";
import footer from "./components/footer.js";
import footerAnimation from "./animation/footer-animation.js";
import menuMobile from "./animation/menu-mobile.js";
import handlePageContent from "./handlePageContent.js";

export default async function createTemplate(page, content, idWorkshoop) {
  const body = document.querySelector("body");

  const headerElement = headerLogin();
  const mainElement = main(content);
  const footerElement = footer();

  body.innerHTML = "";
  body.appendChild(headerElement);
  body.appendChild(mainElement);
  body.appendChild(footerElement);

  handlePageContent(page, idWorkshoop);
  //Animations
  footerAnimation();
  menuMobile();
}
