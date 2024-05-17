import login from "./page-script/login.js";
import registrar from "./page-script/registrar.js";
import workshop from "./page-script/workshop.js";
import pageWorkshop from "./page-script/show-workshop.js";
import recipes from "./page-script/receitas.js";
import exibirReceita from "./page-script/exibir-receita.js";
import perfil from "./page-script/perfiil.js";
import dadosPerfil from "./page-script/dados-perfil.js";
import home from "./page-script/home.js";

export default async function handlePageContent(page, id) {
  const currentPage = page.replace("/pages/", "").replace(".html", "");

  switch (currentPage) {
    case "home":
      home();
      break;
    case "login":
      login();
      break;
    case "registrar":
      registrar();
      break;
    case "workshops":
      workshop();
      break;
    case "show-workshop":
      pageWorkshop(id);
      break;
    case "receitas":
      recipes();
      break;
    case "exibir-receita":
      exibirReceita(id);
      break;
    case "perfil":
      perfil();
      break;
    case "dados-perfil":
      dadosPerfil();
      break;
  }
}
