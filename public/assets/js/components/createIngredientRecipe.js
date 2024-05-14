export default async function creatIngredientRecipe(ingredient) {
    const img = document.createElement('img');
    img.src = '/assets/img/icon-ingredient.svg';

    const p = document.createElement('p');
    p.innerText = `${ingredient.name} - ${ingredient.amount}`; 

    const div = document.createElement('div');
    div.className = 'card-ingredient';
    div.appendChild(img);
    div.appendChild(p);
    
    return div;
}