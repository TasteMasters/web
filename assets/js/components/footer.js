export default function footer() {
    const template = `
        <section id="about-section">
            <div>
                <img src="/assets/img/logo.svg" alt="Logo TasteMaster" id="img-footer-logo"/>
                <p>Siga a TasteMaster no Facebook, Instagram e Twitter para se juntar à nossa comunidade culinária vibrante e inspiradora.</p>
            </div>
            <div>
                <ul>
                    <li><a href="/sobre">Sobre Nós</a></li>
                    <li><a href="/termos">Termos de Serviço</a></li>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                </ul>
            </div>
        </section>
        <section id="icons-section">
            <a href="/"><img src="/assets/img/icon-facebook.svg" alt="Ícone do Facebook" class="icons"  id="icon-facebook" /></a>
            <a href="/"><img src="/assets/img/icon-instagram.svg" alt="Ícone do Instagram" class="icons" id="icon-instagram" /></a>
            <a href="/"><img src="/assets/img/icon-twitter.svg" alt="Ícone do Twitter" class="icons" id="icon-twitter" /></a>
            <hr />
        </section>
        <p id="direitos-tastemaster">Direitos reservados à TasteMaster</p>
    `

    const footer = document.createElement('footer');
    footer.innerHTML = template;
    return footer;
}