// import workshop from "./page-script/workshop.js";
// import pageWorkshop from "./page-script/show-workshop.js";

import login from "./page-script/login.js";
import registrar from "./page-script/registrar.js";

export default async function handlePageContent(page, idWorkshoop) {
  const currentPage = page.replace("/pages/", "").replace(".html", "");

  switch (currentPage) {
    case "login":
      login();
      break;
    case "registrar":
      registrar();
      break;
    case "workshops":
      //workshop();
      break;
    case "show-workshop":
      //pageWorkshop(idWorkshoop);
      break;
  }
}
