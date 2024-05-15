import { urlRoute } from "../url-routes.js";

export default function headerLogin(userLogged) {
  let template;

  if (userLogged) {
    template = `
            <nav>
                <div>
                    <a href="/">
                        <img src="/assets/img/logo.svg" alt="Logo TasteMaster">
                    </a>
                </div>
                <ul id="navigation">
                    <li id="mobile-menu-icon">
                        <button id="menu-open">
                            <img src="/assets/img/menu.svg" alt="menu" id="menu-img">
                        </button>
                    </li>
                    <li class="navigation-desktop"><a href="/workshops">Workshops</a></li>
                    <li class="navigation-desktop"><a href="/receitas">Receitas</a></li>
                    <li class="navigation-desktop"><button class="btn-exit">
                        <img src="/assets/img/icon-close-modal.svg" id="img-logout" />
                    </button></li>
                </ul>
            </nav>
            <div class="menu-mobile">
                <ul>
                    <li><a href="/workshops" class="navigate">Workshops</a></li>
                    <li><a href="/receitas" class="navigate">Receitas</a></li>
                    <li><button class="navigate btn-exit">Sair</button></li>
                </ul>
            </div>
        `;

    const header = document.createElement("header");
    header.innerHTML = template;

    const body = document.querySelector("body");
    body.innerHTML = "";
    body.appendChild(header);

    const btnsExit = document.getElementsByClassName("btn-exit");
    for (const element of btnsExit) {
      element.addEventListener("click", () => {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        urlRoute("/");
      });
    }
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
                    <li id="mobile-menu-icon">
                        <button id="menu-open">
                            <img src="assets/img/menu.svg" alt="menu" id="menu-img">
                        </button>
                    </li>
                    <li class="navigation-desktop"><a href="/workshops">Workshops</a></li>
                    <li class="navigation-desktop"><a href="/receitas">Receitas</a></li>
                    <li class="navigation-desktop"><a href="/login" id="login">Login</a></li>
                </ul>
            </nav>
            <div class="menu-mobile">
                <ul>
                    <li><a href="/workshops" class="navigate">Workshops</a></li>
                    <li><a href="/receitas" class="navigate">Receitas</a></li>
                    <li><a href="/login" class="navigate">Login</a></li>
                </ul>
            </div>
        `;

    const header = document.createElement("header");
    header.innerHTML = template;

    const body = document.querySelector("body");
    body.innerHTML = "";
    body.appendChild(header);
  }
}
