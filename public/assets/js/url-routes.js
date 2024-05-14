import createTemplate from "./script.js";

document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.matches('a')) {
        return;
    }
    e.preventDefault();
    urlRoute(target.href);
});

const urlRoutes = {
    404: {
        path: '/pages/404.html',
        title: '',
        description: ''
    },
    "/": {
        path: '/pages/home.html',
        title: '',
        description: ''
    },
    "/login": {
        path: '/pages/login.html',
        title: '',
        description: ''
    },
    "/receitas": {
        path: '/pages/receitas.html',
        title: '',
        description: ''
    },
    "/exibir-receita": {
        path: '/pages/exibir-receita.html',
        title: '',
        description: ''
    },
    "/workshops": {
        path: '/pages/workshops.html',
        title: '',
        description: ''
    },
    "/registrar": {
        path: '/pages/registrar.html',
        title: '',
        description: ''
    },
    "/show-workshop": {
        path: '/pages/show-workshop.html',
    },
    "/perfil": {
        path: '/pages/perfil.html',
        title: '',
        description: ''
    },
    "/receita": {
        path: '/pages/receita.html',
        title: '',
        description: ''
    }
};

const urlRoute = (url, idWorkshoop, idRecipe) => {
    window.history.pushState({}, "", url);
    const id = idWorkshoop || idRecipe;
    urlLocationHandler(id);
};

const urlLocationHandler = async (id) => {
    const location = window.location.pathname;
    if (location.length === 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.path).then((response) => response.text());
    createTemplate(route.path, html, id);
};

window.addEventListener('popstate', urlLocationHandler);

urlLocationHandler();

export { urlLocationHandler, urlRoute };