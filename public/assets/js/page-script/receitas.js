import { AuthController } from "../api/auth/auth.controller.js";
import { urlRoute } from "../url-routes.js";
import listRecipes from "../api/recipe/listRecipes.js";
import createCardRecipe from "../components/card-recipe.js";

export default async function recipes() {
    const isAuthenticated = AuthController.isAuthenticated();

    if (!isAuthenticated) {
        urlRoute('/login');
    }

    if (isAuthenticated) {
        const recipes = await listRecipes();
        
        // create cards
        const sectionCards = document.getElementById('cards-recipes');
        recipes.forEach(async recipe => {
            const card = await createCardRecipe(recipe);
            sectionCards.appendChild(card);
        });
    }
}