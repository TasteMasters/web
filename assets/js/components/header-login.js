export default function headerLogin() {
    const template = `
        <nav>
            <div>
                <a href="/">
                    <img src="assets/img/logo.svg" alt="Logo TasteMaster">
                </a>
            </div>
            <ul id="navigation">
                <li class="navigation-desktop"><a href="/workshops">Workshops</a></li>
                <li class="navigation-desktop"><a href="/desafios">Desafios</a></li>
                <li class="navigation-desktop"><a href="/comunidade">Comunidade</a></li>
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
        </ul>
    </div>
    `
    const header = document.createElement('header');
    header.innerHTML = template;
    return header;
}