import { environment } from "../api/enviroment.js";
import { getUser } from "../api/user/getUser.js";
import { getUserId } from "../api/utils/getUserId.js";
import getUserWorkshops from "../api/workshop/getUserWorkshops.js";
import imageWorkshopsCreated from "../components/ImageWorkshopsCreated.js";
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
    if (user.pinterest) {
        await imageSocialMedia('pinterest', user.pinterest);
    }
    if (user.instagram) {
        await imageSocialMedia('instagram', user.instagram);
    }
    if (user.linkedin) {
        await imageSocialMedia('linkedin', user.linkedin);
    }

    // Botão editar foto de perfil
    const btn = document.getElementById('button-red-bg');
    btn.addEventListener('click', async ()=> {
        const modal = await editImageProfile(id_user);
        const body = document.querySelector('body');
        body.appendChild(modal);
    });

    // Workshops criados
    const workshopsCreated = await getUserWorkshops();
    console.log(workshopsCreated);
    if (workshopsCreated) {
        workshopsCreated.forEach(element => {
            imageWorkshopsCreated(element.image, element.id);
        });
    }
    if (workshopsCreated[0] === undefined) {
        const div = document.getElementById('profile-recipes');
        div.innerHTML = '';
        const p = document.createElement('p');
        p.innerText = 'Você ainda não criou um workshop';
        div.appendChild(p);
    } 
}