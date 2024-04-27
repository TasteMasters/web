import { getUser } from "../../../mocks/user.js";

export default async function overviewWorkshop(contentWorkshop, workshop) {
    contentWorkshop.style.display = 'flex';
    contentWorkshop.style.flexDirection = 'row';
    contentWorkshop.style.gap = '1rem';
    
    const section = document.createElement('section');

    // Criar a primeira seção com um parágrafo
    const section1 = document.createElement('section');
    section1.id = 'section-description-workshop';
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = workshop.description;
    section1.appendChild(paragraph1);

    // Criar a segunda seção com a imagem do criador e informações sobre o criador
    const section2 = document.createElement('section');
    section2.id = 'section-workshop-creator'

    const creatorInfoDiv = document.createElement('div');
    creatorInfoDiv.id = 'creator-info-div';

    const user = await getUser(workshop.creator_id);
    const creatorImageDiv = document.createElement('div');
    creatorImageDiv.style.background = `url(${user.image}) no-repeat`;
    creatorImageDiv.style.backgroundSize = 'contain'; // Define o tamanho da imagem de fundo
    creatorImageDiv.style.backgroundPosition = 'center';
    creatorImageDiv.id = 'image-workshop-creator';

    const creatorDetailsDiv = document.createElement('div');
    const creatorNameHeading = document.createElement('h3');
    creatorNameHeading.textContent = user.name;
    const creatorProfessionParagraph = document.createElement('p');
    creatorProfessionParagraph.textContent = user.specialization;
    creatorDetailsDiv.appendChild(creatorNameHeading);
    creatorDetailsDiv.appendChild(creatorProfessionParagraph);

    creatorInfoDiv.appendChild(creatorImageDiv);
    creatorInfoDiv.appendChild(creatorDetailsDiv);

    // Adicionar descrição do criador
    const creatorDescriptionDiv = document.createElement('div');
    const creatorDescriptionParagraph = document.createElement('p');
    creatorDescriptionParagraph.textContent = user.description;
    creatorDescriptionDiv.appendChild(creatorDescriptionParagraph);

    section2.appendChild(creatorInfoDiv);
    section2.appendChild(creatorDescriptionDiv);

    // Adicionar as seções ao body (ou a um elemento específico se preferir)
    contentWorkshop.appendChild(section1);
    contentWorkshop.appendChild(section2);
};