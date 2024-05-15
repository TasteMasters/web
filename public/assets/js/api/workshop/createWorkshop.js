import { environment } from "../enviroment.js";

export default async function createWorkshop(data) {
  const host = environment.host;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };

  const url = `${host}/workshops/`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "Erro de conexão com a API" };
  }
}
