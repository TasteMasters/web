export default async function createCardWorkshop(data, user_workshops_started) {
    const templateCard = document.createElement('div');
    templateCard.className = 'card-workshop';

    const img = document.createElement('img');
    img.className = 'img-card-workshop'
    img.src = `${data.image}`;

    const h3 = document.createElement('h3');
    h3.innerText = `${data.title}`;

    const pDescription = document.createElement('p');
    pDescription.innerText = data.description;

    const divDate = document.createElement('div');
    divDate.id = 'date-workshop';

    const iconDate = document.createElement('img');
    iconDate.src = 'assets/img/icon-date.svg';
    
    const pDate = document.createElement('p');
    pDate.innerText = `${data.start_date}`;

    const btnCard = document.createElement('a');
    btnCard.href = '/';
    btnCard.dataset.idWorkshop = data.id;

    const idWorkshop = Number.parseInt(data.id)
    const included = user_workshops_started.includes(idWorkshop);
    if (included) {
        btnCard.innerText = 'Abrir';
    }
    if (!included) {
        btnCard.innerText = 'Inscreva-se';
    }

    templateCard.appendChild(img);
    templateCard.appendChild(h3);
    templateCard.appendChild(pDescription);
    templateCard.appendChild(divDate);
    divDate.appendChild(iconDate);
    divDate.appendChild(pDate);
    templateCard.appendChild(btnCard);

    return templateCard;
}