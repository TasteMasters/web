import { getWorkshop } from "../../../mocks/mock-workshop.js";
import { addModalDelete } from "./modal-delete-ws.js";

export default function createSectionMyWorkshop(id) {
  const data = getWorkshop(id);

  // Criando os elementos do template
  const workshopCard = document.createElement("div");
  workshopCard.id = `my-ws${id}`;
  workshopCard.classList.add("my-workshop-card");

  const titleParagraph = document.createElement("p");
  titleParagraph.textContent = data.title;

  const iconsList = document.createElement("ul");
  iconsList.id = "icons-ws";

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/img/ws-remove.svg";
  deleteIcon.classList.add("deleteWs");
  deleteIcon.dataset.idWorkshop = id;
  deleteIcon.alt = "Delete workshop";
  deleteIcon.addEventListener('click', ()=> {
    addModalDelete(deleteIcon.dataset.idWorkshop)
  });

  const editIcon = document.createElement("img");
  editIcon.src = "assets/img/ws-edit.svg";
  editIcon.classList.add("EditWs");
  editIcon.dataset.idWorkshop = id;
  editIcon.alt = "Edit workshop";

  const moreIcon = document.createElement("img");
  moreIcon.src = "assets/img/ws-more.svg";
  moreIcon.classList.add("OpenWs");
  moreIcon.dataset.idWorkshop = id;
  moreIcon.alt = "Open workshop";

  const deleteLi = document.createElement("li");
  deleteLi.appendChild(deleteIcon);

  const editLi = document.createElement("li");
  editLi.appendChild(editIcon);

  const moreLi = document.createElement("li");
  moreLi.appendChild(moreIcon);

  // Montando a estrutura do template
  iconsList.appendChild(deleteLi);
  iconsList.appendChild(editLi);
  iconsList.appendChild(moreLi);

  workshopCard.appendChild(titleParagraph);
  workshopCard.appendChild(iconsList);

  // Criando o elemento de contêiner e adicionando o workshopCard
  const workshopsStartedContainer = document.createElement("div");
  workshopsStartedContainer.id = "workshops-started";
  workshopsStartedContainer.appendChild(workshopCard);

  return workshopsStartedContainer;
}
