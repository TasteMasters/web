export default function headerLogin() {
    const template = `
        <nav>
            <div>
                <a href="/">
                    <img src="" alt="logo">
                </a>
            </div>
            <ul>
                <li><a href="/receitas">Receitas</a></li>
                <li><a href="/desafios">Desafios</a></li>
                <li><a href="/workshops">Workshops</a></li>
                <li><a href="/comunidade">Comunidade</a></li>
            </ul>
            <div>
                <a href="/login">entre</a>
            </div>
        </nav>
    `
    const header = document.createElement('header');
    header.innerHTML = template;
    return header;
}