import { environment } from "../enviroment.js";

export class AuthController {
  constructor() {}

  isAuthenticated() {
    console.log(document.cookie);
    if (!document.cookie.includes("token")) {
      return false;
    }

    return true;
  }

  async signin(email, password) {
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
    })
      .then((response) => {
        if (response.status !== 200) {
          return false;
        }

        return true;
      })
      .catch((error) => {
        console.error("Error:", error);
        return false;
      });
  }

  async signup({ name, email, password, password_confirmation }) {
    return await fetch(`${environment.host}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          return false;
        }

        return true;
      })
      .catch((error) => {
        console.error("Error:", error);
        return false;
      });
  }
}
