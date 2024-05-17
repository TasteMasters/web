import { urlRoute } from "../url-routes.js";

export default async function home() {
    const btnRecipe = document.getElementById('button-display-recipes');
    btnRecipe.addEventListener('click', ()=> {
        urlRoute('/receitas');
    })
    btnRecipe.style.cursor = 'pointer';
}