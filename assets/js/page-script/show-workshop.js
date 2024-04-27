import { getWorkshop } from "../../../mocks/mock-workshop.js";
import contentWorkshop from "../components/content-workshop.js";
import overviewWorkshop from "../components/overview-workshop.js";

export default async function pageWorkshop(idWorkshoop){
    const sectionHeaderWorkshop = document.getElementById('section-header-workshop');
        
    const workshop = await getWorkshop(Number(idWorkshoop));

    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';

    const sectionContentWorkshop = document.getElementById('workshop-content');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = workshop.title;

    const list = document.createElement('ul');

    const listItem1 = document.createElement('li');
    const item1Img = document.createElement('img');
    item1Img.src = 'assets/img/icon-difficulty.svg';
    const item1Paragraph = document.createElement('p');
    item1Paragraph.innerText = workshop.difficulty;
    listItem1.appendChild(item1Img);
    listItem1.appendChild(item1Paragraph);

    const listItem2 = document.createElement('li');
    const item2Img = document.createElement('img');
    item2Img.src = 'assets/img/icon-category.svg';
    const item2Paragraph = document.createElement('p');
    item2Paragraph.innerText = workshop.category;
    listItem2.appendChild(item2Img);
    listItem2.appendChild(item2Paragraph);

    const buttonDiv = document.createElement('div');
    buttonDiv.id = 'button-container';

    const buttonOverview = document.createElement('button');
    buttonOverview.textContent = 'Visão geral';

    const buttonContent = document.createElement('button');
    buttonContent.textContent = 'Conteúdo';

    buttonDiv.appendChild(buttonOverview);
    buttonDiv.appendChild(buttonContent);

    buttonOverview.addEventListener('click', async ()=>{
        buttonOverview.classList.add('button-activated');
        buttonContent.classList.remove('button-activated');
        sectionContentWorkshop.innerHTML = '';
        await overviewWorkshop(sectionContentWorkshop, workshop);
    });

    buttonContent.addEventListener('click', async ()=>{
        buttonContent.classList.add('button-activated');
        buttonOverview.classList.remove('button-activated');

        sectionContentWorkshop.innerHTML = '';
        await contentWorkshop(sectionContentWorkshop, workshop);
    });

    buttonOverview.click();

    list.appendChild(listItem1);
    list.appendChild(listItem2);

    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(list);

    sectionHeaderWorkshop.appendChild(headerContainer);
    sectionHeaderWorkshop.appendChild(buttonDiv);
}