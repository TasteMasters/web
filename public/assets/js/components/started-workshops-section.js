import { getWorkshop } from "../../../mocks/mock-workshop.js";
import { urlRoute } from "../url-routes.js";

export default function createSectionStartedWorkshop(id) {
  const data = getWorkshop(id);

  const div = document.createElement("div");
  div.id = `ws${id}`;
  div.classList.add("workshop-started-card");

  const titleParagraph = document.createElement("p");
  titleParagraph.textContent = data.title;

  const link = document.createElement("p");
  link.dataset.idWorkshop = id;
  link.innerText = "Voltar a praticar";
  link.addEventListener("click", async (e) => {
    e.preventDefault();
    await urlRoute("/show-workshop", link.dataset.idWorkshop);
  });

  div.appendChild(titleParagraph);
  div.appendChild(link);

  return div;
}
