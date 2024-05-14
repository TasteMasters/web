import { environment } from "../api/enviroment.js";
import { urlRoute } from "../url-routes.js";

export default function createCardRecipe(data) {
  const templateCard = document.createElement("div");
  templateCard.className = "card-recipe";
  templateCard.id = data.id;
  // Abrir página com detalhes da receita
  templateCard.addEventListener("click", async () => {
    await urlRoute("/exibir-receita", data.id);
  });

  const img = document.createElement("img");
  img.className = "img-card-recipe";
  const host = environment.image;
  const image = data.images[0].image;
  img.src = `${host}/static/${image}`;

  const h3 = document.createElement("h3");
  h3.innerText = `${data.title}`;

  const pDescription = document.createElement("p");
  const fullDescription = data.description;
  const wordLimit = 20;
  const words = fullDescription.split(" ");

  let formattedDescription;
  if (words.length <= wordLimit) {
    formattedDescription = fullDescription;
  } else {
    formattedDescription = words.slice(0, wordLimit).join(" ") + "...";
  }
  pDescription.innerText = formattedDescription;

  templateCard.appendChild(img);
  templateCard.appendChild(h3);
  templateCard.appendChild(pDescription);

  return templateCard;
}
