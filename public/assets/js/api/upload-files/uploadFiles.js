import { environment } from "../enviroment.js";

export default async function uploadFiles(data) {
  const host = environment.host;

  const options = {
    method: "POST",

    credentials: "include",
    body: data,
  };

  const url = `${host}/upload-files/`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "Erro de conexão com a API" };
  }
}
