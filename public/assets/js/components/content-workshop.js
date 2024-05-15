import accordionIngredients from "./accordion-ingredients.js";
import accordionTopics from "./accordion-topics.js";

export default async function contentWorkshop(contentWorkshop, workshop) {
  await accordionIngredients(contentWorkshop, workshop.ingredients);

  const topics = workshop.topics;
  topics.forEach(async (topic) => {
    await accordionTopics(contentWorkshop, topic);
  });

  const buttonCompleteTopic = document.createElement("button");
  buttonCompleteTopic.innerText = "Concluir Workshop";
  contentWorkshop.appendChild(buttonCompleteTopic);

  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      const content = this.querySelector(".content-accordion");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // Oculta todos os outros conteúdos
        document.querySelectorAll(".content-accordion").forEach((item) => {
          item.style.display = "none";
        });
        content.style.display = "block";
      }
    });
  });
}
