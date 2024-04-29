import { AuthController } from "../api/auth/auth.controller.js";
import { urlRoute } from "../url-routes.js";

export default async function login() {
  const email = document.getElementById("user_email");
  const password = document.getElementById("user_password");

  document
    .getElementById("login_form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const auth = new AuthController();
      const result = await auth.signin(email.value, password.value);

      if (result) {
        urlRoute("/workshops", null);
      }
    });
}
