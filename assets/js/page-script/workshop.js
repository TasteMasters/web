import { getAllWorkshops } from "../../../mocks/mock-workshop.js";
import { getUser } from "../../../mocks/user.js";
import buttonCreateWs from "../components/button-ws-created.js";
import createCardWorkshop from "../components/card-workshop.js";
import workshopInformation from "../components/workshop-information.js";
import createSectionMyWorkshop from "../components/my-workshops-section.js";
import createSectionStartedWorkshop from "../components/started-workshops-section.js";
import listWorkshops from "../api/workshop/listWorkshops.js";

export default async function workshop(){
    const workshops = await listWorkshops();

    // Workshops started
    const user = await getUser(1);
    const startedWorkshops = await user.workshops_started;

    const showWorkshops = document.getElementById("content-started-workshops");
    showWorkshops.innerHTML = '';

    startedWorkshops.forEach(async (idWorkshop) => {
        const card = await createSectionStartedWorkshop(idWorkshop);
        showWorkshops.appendChild(card);
    })

    // My workshops
    const myWorkshops = user.created_workshops;
    
    const sectionWorkshopsCreated = document.getElementById("content-my-workshops");
    sectionWorkshopsCreated.innerHTML = ''

    myWorkshops.forEach(async (idWorkshop) => {
        const card = await createSectionMyWorkshop(idWorkshop);
        sectionWorkshopsCreated.appendChild(card);
    });    

    // Button create workshop
    const button = buttonCreateWs();
    button.addEventListener('click', async ()=> {
        const modalCreateWS = await workshopInformation('create', user);

        const body = document.querySelector('body');
        body.appendChild(modalCreateWS);
    });
    

    const sectionMyWorkshops = document.getElementById("my-workshops");
    sectionMyWorkshops.appendChild(button);
    
    // Cards workshops
    const sectionCards = document.getElementById('show-workshops-cards');

    workshops.forEach(async (element) => {
        const card = await createCardWorkshop(element, user.workshops_started);
        sectionCards.appendChild(card);
    });
};