import { environment } from "../enviroment.js";

export class AuthController {
  static isAuthenticated() {
    if (!document.cookie.includes("token")) {
      return false;
    }

    return true;
  }

  static async signin(email, password) {
    return await fetch(`${environment.host}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error("Email ou senha inválidos");
      }

      return true;
    });
  }

  static async signup({ name, email, password, password_confirmation }) {
    return await fetch(`${environment.host}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
      }),
    }).then((response) => {
      if (response.status === 200) {
        return true;
      } else if (response.status === 409) {
        throw new Error("Email já cadastrado");
      } else {
        throw new Error("Erro ao cadastrar");
      }
    });
  }
}
