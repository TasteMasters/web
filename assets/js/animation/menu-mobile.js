export default function menuMobile() {
    const button = document.querySelector("#menu-open")
    const imageButton = document.querySelector("#menu-img")
    const menuMobile = document.querySelector(".menu-mobile")

    button.addEventListener('click', function() {
        if(menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open');
            imageButton.src = '/assets/img/menu.svg';
            
        } else {
            menuMobile.classList.add('open');
            imageButton.src = '/assets/img/close.svg';
        }
    })
}