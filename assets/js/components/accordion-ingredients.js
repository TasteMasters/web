export default async function accordionIngredients(contentWorkshop, ingredients) {
    const accordionTopic = document.createElement('div');
    accordionTopic.className = 'accordion-item';
    
    const div = document.createElement('div');
    div.className = 'div-header-topic';

    const titleAccordion = document.createElement('h3');
    titleAccordion.innerText = 'Ingredientes';
    div.appendChild(titleAccordion);

    const img = document.createElement('img');
    img.src = 'assets/img/open-ws.svg';
    img.className = 'image-ws';
    div.appendChild(img);
    
    accordionTopic.appendChild(div);

    const contentAcordion = document.createElement('div');
    contentAcordion.className = 'content-accordion';
    accordionTopic.appendChild(contentAcordion);
    
    
    const divIngredients = document.createElement('div');
    contentAcordion.appendChild(divIngredients);

    const divIng = document.createElement('div');
    divIng.id = 'ingredients';
    divIngredients.appendChild(divIng)

    ingredients.forEach( async (ingredient) => {
        const img = document.createElement('img');
        img.src = '/assets/img/icon-ingredient.svg';

        const p = document.createElement('p');
        p.innerText = ingredient; 

        const div = document.createElement('div');
        div.appendChild(img);
        div.appendChild(p);
        divIng.appendChild(div)
    });

    contentWorkshop.appendChild(accordionTopic);
};