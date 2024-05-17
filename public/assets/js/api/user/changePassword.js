import { environment } from "../enviroment.js";

export default async function changePassword(newData) {
    const host = environment.host;

    const options = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(newData) 
    };

    const url = `${host}/users/change-password`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        return { message: 'Erro de conexão com a API' };
    }
}