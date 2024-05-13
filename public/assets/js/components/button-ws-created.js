import { addModalDelete } from "./modal-delete-ws.js";

export default function buttonCreateWs() {
    const div = document.createElement('div');
    div.id = 'div-btn-my-ws';

    const divBtn = document.createElement('div');

    const img = document.createElement('img');
    img.src = 'assets/img/ws-created.svg';

    const button = document.createElement('button');
    button.id = 'btn-created-workshop';
    button.innerText = 'Criar workshop'

    divBtn.appendChild(img);
    divBtn.appendChild(button);
    div.appendChild(divBtn);

    return div;
}