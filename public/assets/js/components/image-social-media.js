export default async function imageSocialMedia(typeSocialMedia, link) {
    const img = document.createElement('img');
    img.className = 'social-media-icon';
    switch (typeSocialMedia) {
        case 'pinterest':
            img.src = '../assets/img/simple-pinterest.svg';
            break;
        case 'instagram':
            img.src = '../assets/img/simple-instagram.svg';
            break;
        case 'linkedin':
            img.src = '../assets/img/simple-linkedin.svg';
            break;
    }

    const a = document.createElement('a');
    a.href = link;

    const divImages = document.getElementById('profile-social-medias');
    divImages.appendChild(a);
    a.appendChild(img);
}