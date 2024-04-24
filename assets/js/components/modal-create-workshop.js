import addIngredientInput from "./input-ingredient.js";
import createRadioButton from "./input-radio.js";
import addTopicInputs from "./topic-inputs.js";

export default function addModalCreateWorkshop(modalType) {
    const effectModal = document.createElement('div');
    effectModal.id = 'effectModal';

    const div = document.createElement('div');
    div.id = 'modal-content';
    div.style.height = '70vh';

    const divHeaderContent = document.createElement('div'); 
    divHeaderContent.id = 'modal-header-content';

    const h1 = document.createElement('h1');
    h1.innerText = 'Inserir informações do workshop';
    divHeaderContent.appendChild(h1);

    const iconCloseModal = document.createElement('img');
    iconCloseModal.id = 'icon-close-modal';
    iconCloseModal.src = 'assets/img/icon-close-modal.svg';
    iconCloseModal.addEventListener('click', ()=> {
        const body = document.querySelector('body');
        const modal = document.getElementById('effectModal');
        body.removeChild(modal);
    })
    divHeaderContent.appendChild(iconCloseModal);

    const form = document.createElement('form');
    form.id = 'form-modal';
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formValues = {};

        const fieldsetOverviewElements = fieldsetOverview.elements;

        for (let i = 0; i < fieldsetOverviewElements.length; i++) {
            const element = fieldsetOverviewElements[i];
            if (element.name) {
                formValues[element.name] = element.value;
            }
        }

        await sendFormData(formValues);
    });

    // Fieldset Visão Geral
    const fieldsetOverview = document.createElement('fieldset');
    fieldsetOverview.id = 'fieldset-overview';
    const legendOverview = document.createElement('legend');
    legendOverview.textContent = 'Visão Geral';
    fieldsetOverview.appendChild(legendOverview);

    // Input Título
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Título';
    titleInput.name = 'title';
    fieldsetOverview.appendChild(titleInput);

    // textArea Descrição
    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Descrição...'
    descriptionInput.name = 'description';
    fieldsetOverview.appendChild(descriptionInput);

    // Input Categoria
    const categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    categoryInput.placeholder = 'Categoria (exemplo: Carnes, Massas...)'
    categoryInput.name = 'category';
    fieldsetOverview.appendChild(categoryInput);

    // Input Data de Início
    const startDateLabel = document.createElement('label');
    startDateLabel.textContent = 'Data de Início:';
    const startDateInput = document.createElement('input');
    startDateInput.className = 'inputs-label';
    startDateInput.type = 'date';
    startDateInput.name = 'startDate';
    startDateLabel.appendChild(startDateInput);

    // Input Dificuldade
    const difficultyLabel = document.createElement('label');
    difficultyLabel.textContent = 'Dificuldade:';
    const easyRadio = createRadioButton('difficulty', 'Fácil');
    const intermediateRadio = createRadioButton('difficulty', 'Intermediário');
    const hardRadio = createRadioButton('difficulty', 'Difícil');
    const difficultyDiv = document.createElement('div');
    difficultyDiv.id = 'difficulty-div';
    difficultyDiv.appendChild(easyRadio);
    difficultyDiv.appendChild(intermediateRadio);
    difficultyDiv.appendChild(hardRadio);
    difficultyLabel.appendChild(difficultyDiv);

    // Input Imagem
    const imageLabel = document.createElement('label');
    imageLabel.textContent = 'Imagem:';
    const imageInput = document.createElement('input');
    imageInput.className = 'inputs-label';
    imageInput.id = 'customInputFile'; 
    imageInput.type = 'file';
    imageInput.name = 'image';
    imageLabel.appendChild(imageInput);

    fieldsetOverview.appendChild(startDateLabel);
    fieldsetOverview.appendChild(difficultyLabel);
    fieldsetOverview.appendChild(imageLabel);

    // Fieldset Conteúdo
    // ======= INGREDIENTS ==================================================
    const fieldsetContent = document.createElement('fieldset');
    fieldsetContent.id = 'fieldset-content';
    const legendContent = document.createElement('legend');
    legendContent.textContent = 'Conteúdo';
    fieldsetContent.appendChild(legendContent);

    // Organizar inputs (ingredient) dentro de uma <div>
    const divIngredient = document.createElement('div');
    divIngredient.id = 'div-ingredient-inputs';
    const pIngredient = document.createElement('p');
    pIngredient.innerText = 'Ingredientes';
    divIngredient.appendChild(pIngredient);
    fieldsetContent.appendChild(divIngredient);

    // Adicionar pelo menos um campo de input de ingrediente inicialmente
    addIngredientInput(divIngredient);

    // Botão "Adicionar Ingrediente"
    const addIngredientButton = document.createElement('button');
    addIngredientButton.className = 'button-add';
    addIngredientButton.id = 'button-add-ingredient';
    addIngredientButton.type = 'button'; // Evita o envio do formulário
    addIngredientButton.textContent = 'Adicionar Ingrediente';
    addIngredientButton.addEventListener('click', () => {
        addIngredientInput(divIngredient);
    });
    fieldsetContent.appendChild(addIngredientButton);
    
    // ======= TOPICS =======================================================
    // Organizar tópicos dentro de uma <div>
    const divTopics = document.createElement('div');
    divTopics.id = 'div-topics';
    fieldsetContent.appendChild(divTopics);

    // <div> para organizar campos de inputs
    const topic = document.createElement('div');
    topic.id = 'div-topic-inputs';
    divTopics.appendChild(topic);

    // Adicionar pelo menos um tópico inicialmente
    addTopicInputs(topic);

    // Botão "Adicionar Tópico"
    const addTopicButton = document.createElement('button');
    addTopicButton.className = 'button-add';
    addTopicButton.type = 'button'; // Evita o envio do formulário
    addTopicButton.textContent = 'Adicionar Tópico';
    addTopicButton.addEventListener('click', () => {
        addTopicInputs(topic);
    });
    fieldsetContent.appendChild(addTopicButton);

    form.appendChild(fieldsetOverview);
    form.appendChild(fieldsetContent);

    // Botão de envio
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'button-submit';
    submitButton.textContent = 'Criar workshop';
    const divButtonSibmit = document.createElement('div');
    divButtonSibmit.appendChild(submitButton);
    divButtonSibmit.id = 'div-button-submit';
    form.appendChild(divButtonSibmit);

    div.appendChild(divHeaderContent);
    div.appendChild(form);
    effectModal.appendChild(div);

    // Inputs devem ser preenchidos?
    if (modalType === 'create') {
        const allInputs = form.querySelectorAll('input, textarea, select');
        
        allInputs.forEach(input => {
            input.required = true;
        });

        // Seleciona os inputs com name "topicVideo"
        const topicVideoInputs = form.querySelectorAll('input[name="topicVideo"]');
        // Remove a obrigatoriedade dos inputs com name "topicVideo"
        topicVideoInputs.forEach(input => {
            input.required = false;
        });
    }

    return effectModal;
}

async function sendFormData(formValuesOverview) {
    let data = formValuesOverview;
    
    // ingredients
    let ingredients = []
    const inputsIngredients = document.getElementsByName('ingredient');
    inputsIngredients.forEach(input => {
        ingredients.push(input.value);
    })
    data['ingredients'] = ingredients;
    console.log(data);

    // topics
    let topics = [];
    let newTopic = {}
}