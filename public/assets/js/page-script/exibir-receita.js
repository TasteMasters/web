import { environment } from "../api/enviroment.js";
import findRecipe from "../api/recipe/findRecipe.js"
import findUser from "../api/user/findUser.js";
import creatIngredientRecipe from "../components/createIngredientRecipe.js";

export default async function exibirReceita(id_recipe) {
    const recipe = await findRecipe(id_recipe);
    
    const bannerRecipe = document.getElementById('banner-recipe');
    const host = await environment.image;
    const linkImg = `${host}/static/${recipe.images[0].image}`;
    bannerRecipe.style.background = await `url(${linkImg}) no-repeat`;
    bannerRecipe.style.backgroundSize = '100vw 100%';
    bannerRecipe.style.backgroundPosition = 'center';

    // effect filter
    const divEffect = document.createElement('div');
    divEffect.id = 'div-effect';
    bannerRecipe.appendChild(divEffect);

    const title = document.querySelector('#banner-recipe h2');
    title.textContent = recipe.title;

    const user = await findUser(recipe.author_id)
    const creator = document.querySelector('#banner-recipe span');
    creator.textContent = user.name;

    // ingredientes
    const showIngredients = document.getElementById('ingredients-recipe');
    recipe.ingredients.forEach(async (ingredient) => {
        const divIngredient = await creatIngredientRecipe(ingredient);
        showIngredients.appendChild(divIngredient);
    });
    
    // Preparo
    const pDescription = document.getElementById('description-recipe');
    pDescription.textContent = recipe.description;
}