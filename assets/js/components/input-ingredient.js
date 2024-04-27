export default function addIngredientInput(container, value) {
    const div = document.createElement('div');
    div.id = 'div-ingredient';

    const ingredientInput = document.createElement('input');
    ingredientInput.type = 'text';
    ingredientInput.required = true;
    ingredientInput.name = 'ingredient';
    if (value !== null) {
        ingredientInput.value = value;
    }

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