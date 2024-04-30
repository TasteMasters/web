import headerLogin from "./components/header-login.js";
import main from "./components/main.js";
import footer from "./components/footer.js";
import footerAnimation from "./animation/footer-animation.js";
import menuMobile from "./animation/menu-mobile.js";
import handlePageContent from "./handlePageContent.js";


export default async function createTemplate(page, content, idWorkshoop) {
    const body = document.querySelector('body');

    if (page === '/pages/login.html' || page === '/pages/registrar.html') {
        body.innerHTML = '';
        const mainElement = main();
        mainElement.innerHTML = content;
        body.appendChild(mainElement);
        return;
    }
    
    const headerElement = headerLogin();
    const mainElement = main(content);
    const footerElement = footer();
    
    body.appendChild(mainElement);
    body.appendChild(footerElement);
    
    //Animations
    footerAnimation()
    menuMobile();

    handlePageContent(page, idWorkshoop);
}