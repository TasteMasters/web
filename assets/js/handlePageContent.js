// import workshop from "./page-script/workshop.js";
// import pageWorkshop from "./page-script/show-workshop.js";

import login from "./page-script/login.js";

export default async function handlePageContent(page, idWorkshoop) {
  // Workshop
  if (page === "/pages/workshops.html") {
    //workshop();
  }

  // Abrir Workshop
  if (page === "/pages/show-workshop.html") {
    //pageWorkshop(idWorkshoop);
  }

  // Desafios
  if (page === "/pages/desafios.html") {
  }

  // Receitas
  if (page === "/pages/receitas.html") {
  }

  // Perfil
  if (page === "/pages/perfil.html") {
  }
  if (page === "/pages/login.html") {
    login();
  }
}
