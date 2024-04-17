export default function footerAnimation() {
    const iconFacebook = document.getElementById('icon-facebook');
    const iconTwitter = document.getElementById('icon-twitter');
    const iconInstagram = document.getElementById('icon-instagram');
    
    iconFacebook.addEventListener('mouseover', ()=> {
        iconFacebook.src = '/assets/img/icon-facebook-orange.svg';
    })
    iconFacebook.addEventListener('mouseout', ()=> {
        iconFacebook.src = '/assets/img/icon-facebook.svg';
    })

    iconTwitter.addEventListener('mouseover', ()=> {
        iconTwitter.src = '/assets/img/icon-twitter-orange.svg';
    })
    iconTwitter.addEventListener('mouseout', ()=> {
        iconTwitter.src = '/assets/img/icon-twitter.svg';
    })

    iconInstagram.addEventListener('mouseover', ()=> {
        iconInstagram.src = '/assets/img/icon-instagram-orange.svg';
    })
    iconInstagram.addEventListener('mouseout', ()=> {
        iconInstagram.src = '/assets/img/icon-instagram.svg';
    })
}
