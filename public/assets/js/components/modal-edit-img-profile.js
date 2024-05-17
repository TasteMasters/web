import uploadFiles from "../api/upload-files/uploadFiles.js";
import patchUser from "../api/user/patchUser.js";
import { urlLocationHandler, urlRoute } from "../url-routes.js";

export default async function editImageProfile(id_user) {
  const effectModal = document.createElement("div");
  effectModal.id = "effectModal";

  const div = document.createElement("div");
  div.id = "modal-content";

  const divHeaderContent = document.createElement("div");
  divHeaderContent.id = "modal-header-content";

  const h1 = document.createElement("h1");
  h1.innerText = "Inserir imagem";
  divHeaderContent.appendChild(h1);

  const iconCloseModal = document.createElement("img");
  iconCloseModal.id = "icon-close-modal";
  iconCloseModal.src = "/assets/img/icon-close-modal.svg";
  iconCloseModal.addEventListener("click", () => {
    const body = document.querySelector("body");
    const modal = document.getElementById("effectModal");
    body.removeChild(modal);
  });
  divHeaderContent.appendChild(iconCloseModal);

  const form = document.createElement("form");
  form.id = "form-modal";

  // Input Imagem
  const imageLabel = document.createElement("label");
  imageLabel.textContent = "Imagem:";
  const imageInput = document.createElement("input");
  imageInput.className = "inputs-label input-img-profile";
  imageInput.id = "customInputFile";
  imageInput.type = "file";
  imageInput.name = "image";
  imageLabel.appendChild(imageInput);

  imageInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const response = await uploadFiles(formData);
    const newData = {
      photo: response.id 
    }
    const res = await patchUser(id_user, newData)
    
    // Mensagem
    const p = document.createElement('p');
    p.style.fontSize = '1rem';
    p.style.color = 'var(--color-1)';
    p.innerText = 'Atualizando imagem...';
    div.appendChild(p);

    const setTimeOutID = setTimeout(() => {
      urlRoute('/perfil');
      clearInterval(setTimeOutID);
    }, 1500);
  });

  form.appendChild(imageLabel);

  div.appendChild(divHeaderContent);
  div.appendChild(form);
  effectModal.appendChild(div);

  return effectModal;
}