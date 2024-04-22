import { getWorkshop } from "../../../mocks/mock-workshop.js";

export default function createSectionStartedWorkshop(id) {
  const data = getWorkshop(id);

  const template = `
        <div id="ws${id}" class="workshop-started-card">
            <p>${data.title}</p>
            <a href="/">Voltar a praticar</a>
        <div>
    `;

  const div = document.createElement("div");
  div.id = "workshops-started";
  div.innerHTML = template;

  return div;
}