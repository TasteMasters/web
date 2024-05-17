import { environment } from "../api/enviroment";

export default async function imageWorkshopsCreated(linkImage) {
    const img = document.createElement('img');
    img.className = 'recipe';
    const host = environment.image;
    img.src = `${host}/static/${linkImage}`;

    const div = document.getElementById('profile-recipes');
    div.appendChild(img);
}
