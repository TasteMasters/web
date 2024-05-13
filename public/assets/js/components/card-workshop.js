import { urlRoute } from "../url-routes.js";
import pageWorkshop from "../page-script/show-workshop.js";
import { environment } from "../api/enviroment.js";

export default async function createCardWorkshop(data, user_workshops_started) {
  const templateCard = document.createElement("div");
  templateCard.className = "card-workshop";

  console.log(data);

  const img = document.createElement("img");
  img.className = "img-card-workshop";
  const image = data.image;
  const imageFormated = image.replace("uploads\\", "");
  const host = environment.image;
  img.src = `${host}/static/${imageFormated}`;

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

  const divDate = document.createElement("div");
  divDate.id = "date-workshop";

  const iconDate = document.createElement("img");
  iconDate.src = "assets/img/icon-date.svg";

  const pDate = document.createElement("p");
  const date = new Date(data.start_date);
  const dateFormated = date.toISOString().split("T")[0];
  pDate.innerText = `${dateFormated}`;

  const btnCard = document.createElement("button"); // antes era um a
  btnCard.dataset.idWorkshop = data.id;
  btnCard.addEventListener("click", async (e) => {
    e.preventDefault();
    await urlRoute("/show-workshop", btnCard.dataset.idWorkshop);
  });

  const idWorkshop = Number.parseInt(data.id);
  const included = user_workshops_started.includes(idWorkshop);
  if (included) {
    btnCard.innerText = "Abrir";
  }
  if (!included) {
    btnCard.innerText = "Inscreva-se";
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
