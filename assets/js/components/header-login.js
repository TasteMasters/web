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
                    <li class="navigation-desktop"><a href="/desafios">Desafios</a></li>
                    <li class="navigation-desktop"><a href="/receitas">Receitas</a></li>
                    <li class="navigation-desktop"><a href="/perfil" id="link-profile"><img src="assets/img/icon-user.svg" id="img-user"></a></li>
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
                    <li><a href="/desafios" class="navigate">Desafios</a></li>
                    <li><a href="/comunidade" class="navigate">Comunidade</a></li>
                    <li><a href="/perfil" class="navigate">Perfil</a></li>
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
                    <li class="navigation-desktop"><a href="/desafios">Desafios</a></li>
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
                    <li><a href="/desafios" class="navigate">Desafios</a></li>
                    <li><a href="/comunidade" class="navigate">Comunidade</a></li>
                    <li><a href="/perfil" class="navigate">Perfil</a></li>
                </ul>
            </div>
        `
    }

    const header = document.createElement('header');
    header.innerHTML = template; 

    const body = document.querySelector('body');
    body.innerHTML = '';
    body.appendChild(header);

    // Remover comportamento padrão do link do perfil
    if(linkProfile) {
        const linkProfile = document.getElementById('link-profile');
        linkProfile.addEventListener('click', async (e)=> {
            e.preventDefault();
            await urlRoute('/perfil');
        });
    }
}