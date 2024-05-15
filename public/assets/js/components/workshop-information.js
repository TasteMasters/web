import { updateUser } from "../../../mocks/user.js";
import uploadFiles from "../api/upload-files/uploadFiles.js";
import createWorkshop from "../api/workshop/createWorkshop.js";
import editWorkshop from "../api/workshop/editWorkshop.js";
import getWorkshop from "../api/workshop/getWorkshop.js";
import { urlLocationHandler } from "../url-routes.js";
import addIngredientInput from "./input-ingredient.js";
import createRadioButton from "./input-radio.js";
import addTopicInputs from "./topic-inputs.js";

export default async function workshopInformation(modalType, user, idWorkshop) {
  const effectModal = document.createElement("div");
  effectModal.id = "effectModal";

  const div = document.createElement("div");
  div.id = "modal-content";
  div.style.height = "70vh";

  const divHeaderContent = document.createElement("div");
  divHeaderContent.id = "modal-header-content";

  const h1 = document.createElement("h1");
  h1.innerText = "Inserir informações do workshop";
  divHeaderContent.appendChild(h1);

  // Modal de editar: Buscar informações do workshop
  let workshop;
  if (modalType === "edit") {
    workshop = await getWorkshop(idWorkshop);
  }

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
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formValues = {};

    const fieldsetOverviewElements = fieldsetOverview.elements;

    for (let i = 0; i < fieldsetOverviewElements.length; i++) {
      const element = fieldsetOverviewElements[i];
      if (element.name) {
        if (element.name === "difficulty") {
          if (element.checked) {
            formValues[element.name] = element.value;
          }
        } else {
          formValues[element.name] = element.value;
        }
      }
    }

    // Função para enviar os dados
    if (modalType === "create") {
      await sendFormDataWorkshop(modalType, formValues, user);
    }
    if (modalType === "edit") {
      await sendFormDataWorkshop(modalType, formValues, "", idWorkshop);
    }

    urlLocationHandler();
  });

  // Fieldset Visão Geral
  const fieldsetOverview = document.createElement("fieldset");
  fieldsetOverview.id = "fieldset-overview";
  const legendOverview = document.createElement("legend");
  legendOverview.textContent = "Visão Geral";
  fieldsetOverview.appendChild(legendOverview);

  // Input Título
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Título";
  titleInput.name = "title";
  if (modalType === "edit") {
    titleInput.value = workshop.title;
  }
  fieldsetOverview.appendChild(titleInput);

  // textArea Descrição
  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Descrição...";
  descriptionInput.name = "description";
  if (modalType === "edit") {
    descriptionInput.value = workshop.description;
  }
  fieldsetOverview.appendChild(descriptionInput);

  // Input Categoria
  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.placeholder = "Categoria (exemplo: Carnes, Massas...)";
  categoryInput.name = "category";
  if (modalType === "edit") {
    categoryInput.value = workshop.category;
  }
  fieldsetOverview.appendChild(categoryInput);

  // Input Data de Início
  const startDateLabel = document.createElement("label");
  startDateLabel.textContent = "Data de Início:";
  const startDateInput = document.createElement("input");
  startDateInput.className = "inputs-label";
  startDateInput.type = "date";
  startDateInput.name = "start_date";
  if (modalType === "edit") {
    startDateInput.value = workshop.start_date.split("T")[0];
  }
  startDateLabel.appendChild(startDateInput);

  // Input Dificuldade
  const difficultyLabel = document.createElement("label");
  difficultyLabel.textContent = "Dificuldade:";
  if (modalType === "create") {
    const easyRadio = createRadioButton("difficulty", "Fácil");
    const intermediateRadio = createRadioButton("difficulty", "Intermediário");
    const hardRadio = createRadioButton("difficulty", "Difícil");
    const difficultyDiv = document.createElement("div");
    difficultyDiv.id = "difficulty-div";
    difficultyDiv.appendChild(easyRadio);
    difficultyDiv.appendChild(intermediateRadio);
    difficultyDiv.appendChild(hardRadio);
    difficultyLabel.appendChild(difficultyDiv);
  }
  if (modalType === "edit") {
    let easyRadio;
    let intermediateRadio;
    let hardRadio;

    const difficulty = workshop.difficulty;
    if (difficulty === "Fácil") {
      easyRadio = await createRadioButton("difficulty", "Fácil", true);
      intermediateRadio = await createRadioButton(
        "difficulty",
        "Intermediário",
        false
      );
      hardRadio = await createRadioButton("difficulty", "Difícil", false);
    }
    if (difficulty === "Intermediário") {
      easyRadio = await createRadioButton("difficulty", "Fácil", false);
      intermediateRadio = await createRadioButton(
        "difficulty",
        "Intermediário",
        true
      );
      hardRadio = await createRadioButton("difficulty", "Difícil", false);
    }
    if (difficulty === "Difícil") {
      easyRadio = await createRadioButton("difficulty", "Fácil", false);
      intermediateRadio = await createRadioButton(
        "difficulty",
        "Intermediário",
        false
      );
      hardRadio = await createRadioButton("difficulty", "Difícil", true);
    }

    const difficultyDiv = document.createElement("div");
    difficultyDiv.id = "difficulty-div";
    difficultyDiv.appendChild(easyRadio);
    difficultyDiv.appendChild(intermediateRadio);
    difficultyDiv.appendChild(hardRadio);
    difficultyLabel.appendChild(difficultyDiv);
  }

  // Input Imagem
  const imageLabel = document.createElement("label");
  imageLabel.textContent = "Imagem:";
  const imageInput = document.createElement("input");
  imageInput.className = "inputs-label";
  imageInput.id = "customInputFile";
  imageInput.type = "file";
  imageInput.name = "image";
  imageLabel.appendChild(imageInput);

  imageInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await uploadFiles(formData);
    imageInput.dataset.image = response.id;
  });

  fieldsetOverview.appendChild(startDateLabel);
  fieldsetOverview.appendChild(difficultyLabel);
  fieldsetOverview.appendChild(imageLabel);

  // Fieldset Conteúdo
  // ======= INGREDIENTS ==================================================
  const fieldsetContent = document.createElement("fieldset");
  fieldsetContent.id = "fieldset-content";
  const legendContent = document.createElement("legend");
  legendContent.textContent = "Conteúdo";
  fieldsetContent.appendChild(legendContent);

  // Organizar inputs (ingredient) dentro de uma <div>
  const divIngredient = document.createElement("div");
  divIngredient.id = "div-ingredient-inputs";
  const pIngredient = document.createElement("p");
  pIngredient.innerText = "Ingredientes";
  divIngredient.appendChild(pIngredient);
  fieldsetContent.appendChild(divIngredient);

  // Adicionar campos de input
  if (modalType === "create") {
    addIngredientInput(divIngredient, null);
  }
  if (modalType === "edit") {
    const quantityIngredients = workshop.ingredients.length;
    for (let i = 0; i < quantityIngredients; i++) {
      addIngredientInput(divIngredient, workshop.ingredients[i]);
    }
  }

  // Botão "Adicionar Ingrediente"
  const addIngredientButton = document.createElement("button");
  addIngredientButton.className = "button-add";
  addIngredientButton.id = "button-add-ingredient";
  addIngredientButton.type = "button"; // Evita o envio do formulário
  addIngredientButton.textContent = "Adicionar Ingrediente";
  addIngredientButton.addEventListener("click", () => {
    addIngredientInput(divIngredient);
  });
  fieldsetContent.appendChild(addIngredientButton);

  // ======= TOPICS =======================================================
  // Organizar tópicos dentro de uma <div>
  const divTopics = document.createElement("div");
  divTopics.id = "div-topics";
  fieldsetContent.appendChild(divTopics);

  // <div> para organizar campos de inputs
  const topic = document.createElement("div");
  topic.id = "div-topic-inputs";
  divTopics.appendChild(topic);

  // Adicionar campos de input
  if (modalType === "create") {
    await addTopicInputs(topic, null);
  }
  if (modalType === "edit") {
    const quantityTopics = workshop.topics.length;
    for (let i = 0; i < quantityTopics; i++) {
      await addTopicInputs(topic, workshop.topics[0]);
    }
  }

  // Botão "Adicionar Tópico"
  const addTopicButton = document.createElement("button");
  addTopicButton.className = "button-add";
  addTopicButton.type = "button"; // Evita o envio do formulário
  addTopicButton.textContent = "Adicionar Tópico";
  addTopicButton.addEventListener("click", () => {
    addTopicInputs(topic);
  });
  fieldsetContent.appendChild(addTopicButton);

  form.appendChild(fieldsetOverview);
  form.appendChild(fieldsetContent);

  // Botão de envio
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "button-submit";
  if (modalType === "create") {
    submitButton.textContent = "Criar workshop";
  }
  if (modalType === "edit") {
    submitButton.textContent = "Atualizar workshop";
  }
  const divButtonSibmit = document.createElement("div");
  divButtonSibmit.appendChild(submitButton);
  divButtonSibmit.id = "div-button-submit";
  form.appendChild(divButtonSibmit);

  div.appendChild(divHeaderContent);
  div.appendChild(form);
  effectModal.appendChild(div);

  // Inputs devem ser preenchidos?
  if (modalType === "create") {
    const allInputs = form.querySelectorAll("input, textarea, select");

    allInputs.forEach((input) => {
      input.required = true;
    });

    // Seleciona os inputs com name "topicVideo"
    const topicVideoInputs = form.querySelectorAll('input[name="topicVideo"]');
    // Remove a obrigatoriedade dos inputs com name "topicVideo"
    topicVideoInputs.forEach((input) => {
      input.required = false;
    });
  }

  return effectModal;
}

async function sendFormDataWorkshop(modalType, formValuesOverview, user, id) {
  let newWorkshop = formValuesOverview;

  // ingredients
  let ingredients = [];
  const inputsIngredients = document.getElementsByName("ingredient");
  inputsIngredients.forEach((input) => {
    ingredients.push(input.value);
  });
  newWorkshop["ingredients"] = ingredients;

  // topics
  let titles = [];
  const inputsTitle = document.getElementsByName("topicTitle");
  inputsTitle.forEach((input) => {
    titles.push(input.value);
  });

  let duractions = [];
  const inputsDuration = document.getElementsByName("topicDuration");
  inputsDuration.forEach((input) => {
    duractions.push(input.value);
  });

  let descriptions = [];
  const inputsDescription = document.getElementsByName("topicDescription");
  inputsDescription.forEach((input) => {
    descriptions.push(input.value);
  });

  let links = [];
  const inputsVideo = document.getElementsByName("topicVideo");
  inputsVideo.forEach((input) => {
    links.push(input.value);
  });

  let topics = [];
  for (let i = 0; i < titles.length; i++) {
    const newTopic = {
      title: titles[i],
      estimated_time: duractions[i],
      description: descriptions[i],
      video_link: links[i],
      completed: false,
    };

    topics.push(newTopic);
  }

  newWorkshop["topics"] = topics;
  newWorkshop["image"] =
    document.querySelector("#customInputFile").dataset.image;

  // Requisição:
  if (modalType === "create") {
    // Criando workshop:
    const id = await createWorkshop(newWorkshop);

    // atualizar ws criados pelo usuário
    const createdWorkshopsUser = user.created_workshops;
    createdWorkshopsUser.push(id);
    user["created_workshops"] = createdWorkshopsUser;
    const userUpdate = updateUser(user.id, user);
  }
  if (modalType === "edit") {
    await editWorkshop(id, newWorkshop);
  }
}
