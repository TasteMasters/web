import { AuthController } from "../api/auth/auth.controller.js";
import { urlRoute } from "../url-routes.js";

export default async function login() {
  if (AuthController.isAuthenticated()) urlRoute("/", null);

  const email = document.getElementById("user_email");
  const password = document.getElementById("user_password");

  document
    .getElementById("login_form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      let result;
      try {
        result = await AuthController.signin(email.value, password.value);
      } catch (error) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "flex";
        errorMessage.innerText = error.message;
      }

      if (result) {
        urlRoute("/", null);
      }
    });
}
