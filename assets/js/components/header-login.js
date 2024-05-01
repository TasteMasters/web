import { urlRoute } from "../url-routes.js";

export default function headerLogin(userLogged) {
    let template;
    let linkProfile;

    if (userLogged) {
        template = `
            <nav>
                <div>
                    <a href="/">
                        <img src="assets/img/logo.svg" alt="Logo TasteMaster">
                    </a>
                </div>
                <ul id="navigation">
                    <li class="navigation-desktop"><a href="/workshops">Workshops</a></li>
                    <li class="navigation-desktop"><a href="/receitas">Receitas</a></li>
                    <li id="mobile-menu-icon">
                        <button id="menu-open">
                            <img src="assets/img/menu.svg" alt="menu" id="menu-img">
                        </button>
                    </li>
                </ul>
            </nav>
            <div class="menu-mobile">
                <ul>
                    <li><a href="/workshops" class="navigate">Workshops</a></li>
                    <li><a href="/receitas" class="navigate">Receitas</a></li>
                </ul>
            </div>
        `

        linkProfile = true;
    }
    
    if (!userLogged) {
        template = `
            <nav>
                <div>
                    <a href="/">
                        <img src="assets/img/logo.svg" alt="Logo TasteMaster">
                    </a>
                </div>
                <ul id="navigation">
                    <li class="navigation-desktop"><a href="/workshops">Workshops</a></li>
                    <li class="navigation-desktop"><a href="/receitas">Receitas</a></li>
                    <li class="navigation-desktop"><a href="/login" id="login">Login</a></li>
                    <li id="mobile-menu-icon">
                        <button id="menu-open">
                            <img src="assets/img/menu.svg" alt="menu" id="menu-img">
                        </button>
                    </li>
                </ul>
            </nav>
            <div class="menu-mobile">
                <ul>
                    <li><a href="/workshops" class="navigate">Workshops</a></li>
                    <li><a href="/receitas" class="navigate">Receitas</a></li>
                    <li><a href="/login" class="navigate">Login</a></li>
                </ul>
            </div>
        `
    }

    const header = document.createElement('header');
    header.innerHTML = template; 

    const body = document.querySelector('body');
    body.innerHTML = '';
    body.appendChild(header);
}