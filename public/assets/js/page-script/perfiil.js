import { environment } from "../api/enviroment.js";
import { getUser } from "../api/user/getUser.js";
import { getUserId } from "../api/utils/getUserId.js";
import getUserWorkshops from "../api/workshop/getUserWorkshops.js";
import imageSocialMedia from "../components/image-social-media.js";
import editImageProfile from "../components/modal-edit-img-profile.js";

export default async function perfil() {
    const id_user = await getUserId();
    const user = await getUser(id_user);

    // imagem perfil
    const imageProfile = document.getElementById('profile-photo');
    const host = environment.image;
    imageProfile.style.backgroundImage = `url(${host}/static/${user.photo})`;
    imageProfile.style.backgroundPosition = 'center';
    imageProfile.style.backgroundSize = 'cover';

    // nome do usuário
    const nameElement = document.getElementById('h2-username');
    nameElement.textContent = 'Pedro Sávio';

    // descrição
    const descriptionElement = document.getElementById('p-description-user');
    descriptionElement.textContent = 'Um pintor aprendendo a arte da culinária aos poucos 😍';

    // Ícones de redes socias
    const links = {
        pinterest: 'https://br.pinterest.com/',
        instagram: 'https://www.instagram.com/?hl=pt_BR',
        linkedin: 'https://www.linkedin.com'
    }

    if (links.pinterest) {
        await imageSocialMedia('pinterest', links.pinterest);
    }
    if (links.instagram) {
        await imageSocialMedia('instagram', links.instagram);
    }
    if (links.linkedin) {
        await imageSocialMedia('linkedin', links.linkedin);
    }

    // Botão editar foto de perfil
    const btn = document.getElementById('button-red-bg');
    btn.addEventListener('click', async ()=> {
        console.log('abcc');
        const modal = await editImageProfile(id_user);
        const body = document.querySelector('body');
        body.appendChild(modal);
    });

    // Workshops criados
    /* 
    const workshopsCreated = await getUserWorkshops();
    if (workshopsCreated) {
        workshopsCreated.forEach(element => {
            createImageWorkshops(element.photo);
        });
    }
    if (workshopsCreated[0] === undefined) {
        const div = document.getElementById('profile-recipes');
        div.innerHTML = '';
        const p = document.createElement('p');
        p.innerText = 'Você ainda não criou um workshop';
        div.appendChild(p);
    } 
    */
}