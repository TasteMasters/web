export default function addIngredientInput(container) {
    const div = document.createElement('div');
    div.id = 'div-ingredient';

    const ingredientInput = document.createElement('input');
    ingredientInput.type = 'text';
    ingredientInput.required = true;
    ingredientInput.name = 'ingredient';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.type = 'button'; 
    removeButton.addEventListener('click', () => {
        ingredientInput.parentNode.removeChild(ingredientInput);
        removeButton.parentNode.removeChild(removeButton);
    });

    div.appendChild(ingredientInput);
    div.appendChild(removeButton);
    container.appendChild(div);
}