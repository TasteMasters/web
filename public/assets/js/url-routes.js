import createTemplate from "./script.js";

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("a")) {
    return;
  }
  e.preventDefault();
  urlRoute(target.href);
});

const urlRoutes = {
  404: {
    path: "/pages/404.html",
    title: "",
    description: "",
  },
  "/": {
    path: "/pages/home.html",
    title: "",
    description: "",
  },
  "/login": {
    path: "/pages/login.html",
    title: "",
    description: "",
  },
  "/receitas": {
    path: "/pages/receitas.html",
    title: "",
    description: "",
  },
  "/workshops": {
    path: "/pages/workshops.html",
    title: "",
    description: "",
  },
  "/comunidade": {
    path: "/pages/comunidade.html",
    title: "",
    description: "",
  },
  "/registrar": {
    path: "/pages/registrar.html",
    title: "",
    description: "",
  },
  "/show-workshop": {
    path: "/pages/show-workshop.html",
  },
  "/perfil": {
    path: "/pages/perfil.html",
    title: "",
    description: "",
  },
  "/dados-perfil": {
    path: "/pages/dados-perfil.html",
    title: "",
    description: "",
  },
  "/desafios": {
    path: "/pages/challenges.html",
    title: "",
    description: "",
  },
  "/receita": {
    path: "/pages/receita.html",
    title: "",
    description: "",
  },
  "/exibir-receita": {
    path: "/pages/exibir-receita.html",
  },
};

const urlRoute = (url, id) => {
  window.history.pushState({}, "", url + (id ? `/${id}` : ""));
  urlLocationHandler(id);
};

const urlLocationHandler = async (id) => {
  console.log("aaa");
  let location = window.location.pathname;
  if (location.length === 0) {
    location = "/";
  }

  if (location.includes("show-workshop")) {
    id = location.split("/")[2];
    location = "/show-workshop";
  } else if (location.includes("exibir-receita")) {
    id = location.split("/")[2];
    location = "/exibir-receita";
  }

  const route = urlRoutes[location] || urlRoutes[404];
  const html = await fetch(route.path).then((response) => response.text());
  createTemplate(route.path, html, id);
};

window.addEventListener("popstate", urlLocationHandler);

urlLocationHandler();

export { urlLocationHandler, urlRoute };
