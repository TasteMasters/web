import workshop from "./page-script/workshop.js";

export default async function handlePageContent(page) {
    // Workshop
    if (page === '/pages/workshops.html') {
        workshop();
    }

    // Desafios
    if (page === '/pages/desafios.html') {
    }

    // Receitas
    if (page === '/pages/receitas.html') {
    }

    // Perfil
    if (page === '/pages/perfil.html') {
    }
};