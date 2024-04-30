import { AuthController } from "../api/auth/auth.controller.js";
import { urlRoute } from "../url-routes.js";

export default async function registrar() {
  if (AuthController.isAuthenticated()) urlRoute("/", null);

  const name = document.getElementById("name_input");
  const email = document.getElementById("email_input");
  const password = document.getElementById("password_input");
  const passwordConfirmation = document.getElementById(
    "password_confirmation_input"
  );

  document
    .getElementById("register_form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      let result;
      try {
        if (
          !name.value ||
          !email.value ||
          !password.value ||
          !passwordConfirmation.value
        )
          throw new Error("Preencha todos os campos");
        if (password.value !== passwordConfirmation.value)
          throw new Error("As senhas não conferem");
        result = await AuthController.signup({
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: passwordConfirmation.value,
        });
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
