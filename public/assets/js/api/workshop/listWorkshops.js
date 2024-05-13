import { environment } from "../enviroment.js";

export default async function listWorkshops() {
    const host = environment.host;

    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    };

    const url = `${host}/workshops`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        return { message: 'Erro de conexão com a API' };
    }
}