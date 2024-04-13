import headerLogin from "./components/header-login.js";
import main from "./components/main.js";

export default function createTemplate(page, content) {
    const body = document.querySelector('body');

    if (page === '/pages/login.html') {
        body.innerHTML = '';
        const mainElement = main();
        mainElement.innerHTML = content;
        body.appendChild(mainElement);
        return;
    }
    
    const headerElement = headerLogin();
    const mainElement = main(content);
    
    body.innerHTML = '';
    body.appendChild(headerElement);
    body.appendChild(mainElement);
}