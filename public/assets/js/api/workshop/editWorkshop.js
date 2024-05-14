import { environment } from "../enviroment.js";

export default async function editWorkshop(id, data) {
  const host = environment.host;

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };

  const url = `${host}/workshops/${id}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "Erro de conexão com a API" };
  }
}
