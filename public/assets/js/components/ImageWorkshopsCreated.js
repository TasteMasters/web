import { environment } from "../api/enviroment.js";
import { urlRoute } from "../url-routes.js";

export default async function imageWorkshopsCreated(linkImage, idWorkshop) {
    const img = document.createElement('img');
    img.id = idWorkshop;
    img.className = 'recipe';
    const host = environment.image;
    img.src = `${host}/static/${linkImage}`;

    img.addEventListener('click', ()=> {
        urlRoute('/show-workshop', idWorkshop);
    });

    const div = document.getElementById('profile-recipes');
    div.appendChild(img);
}