export default function headerLogin() {
    const template = `
        <nav>
            <div>
                <a href="/">
                    <img src="assets/img/logo.svg" alt="Logo TasteMaster">
                </a>
            </div>
            <ul>
            <li><a href="/workshops">Workshops</a></li>
                <li><a href="/desafios">Desafios</a></li>
                <li><a href="/comunidade">Comunidade</a></li>
                <li><a href="/login" id="login">Login</a></li>
            </ul>
        </nav>
    `
    const header = document.createElement('header');
    header.innerHTML = template;
    return header;
}