import deleteWorkshop from "../api/workshop/deleteWorkshop.js";
import { urlLocationHandler } from "../url-routes.js";

function addModalDelete(id) {
  const effectModal = document.createElement("div");
  effectModal.id = "effectModal";

  const div = document.createElement("div");
  div.id = "modal-content";

  const p = document.createElement("p");
  p.innerText = "Tem certeza que deseja apagar o workshop?";

  const divBtns = document.createElement("div");
  divBtns.id = "div-buttons";

  // Button confirm
  const btnConfirm = document.createElement("button");
  btnConfirm.innerText = "Confirmar";
  btnConfirm.id = "btn-confirm";
  btnConfirm.addEventListener("click", async () => {
    btnCancel.disabled = true;
    btnCancel.style.background = "rgba(0,0,0,.3)";

    const divMessage = document.createElement("div");
    const message = document.createElement("span");
    message.innerText = "Aguarde, estamos apagando o workshop...";

    div.appendChild(divMessage);
    divMessage.innerHTML = "";
    divMessage.appendChild(message);

    const idWorkshop = id;
    const iddd = 10; // --> ERROR
    const result = await deleteWorkshop(idWorkshop);
    if (result) {
      message.innerText = "Workshop deletado com sucesso!";

      const exit = document.createElement("span");
      exit.innerText = "Saindo...";
      divMessage.appendChild(exit);

      const idSetTimeOut = setTimeout(() => {
        // fechar modal:
        body.removeChild(effectModal);

        // atuaizar página
        urlLocationHandler();

        clearTimeout(idSetTimeOut);
      }, 2000);
    }

    if (!result) {
      message.innerText = "Não foi possível deletar workshop!";
      btnCancel.disabled = false;
      btnCancel.style.background = "var(--color-7)";
    }
  });

  // Button cancel
  const btnCancel = document.createElement("button");
  btnCancel.innerText = "Cancelar";
  btnCancel.id = "btn-cancel";
  btnCancel.addEventListener("click", () => {
    body.removeChild(effectModal);
  });

  effectModal.appendChild(div);
  div.appendChild(p);
  div.appendChild(divBtns);
  divBtns.appendChild(btnConfirm);
  divBtns.appendChild(btnCancel);

  const body = document.querySelector("body");
  body.appendChild(effectModal);
}

export { addModalDelete };
