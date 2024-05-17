import { environment } from "../api/enviroment.js";
import changePassword from "../api/user/changePassword.js";
import { getUser } from "../api/user/getUser.js";
import patchUser from "../api/user/patchUser.js";
import { getUserId } from "../api/utils/getUserId.js";
import modalMessage from "../components/modalMessage.js";

export default async function dadosPerfil() {
    const id_user = await getUserId();
    const user = await getUser(id_user);

    // imagem perfil
    const imageProfile = document.getElementById('profile-photo');
    const host = environment.image;
    imageProfile.style.backgroundImage = `url(${host}/static/${user.photo})`;
    imageProfile.style.backgroundPosition = 'center';
    imageProfile.style.backgroundSize = 'cover';

    // Preencher campos do formulário Alterar Dados
    // Input Nome
    const inputName = document.getElementsByClassName('name');
    if (user.name !== '' && user.name !== null && user.name !== undefined) {
        inputName[0].value = user.name;
    }

    // Input Email
    const inputEmail = document.getElementsByClassName('email');
    if (user.email !== '' && user.email !== null && user.email !== undefined) {
        inputEmail[0].value = user.email;
    }

    // Input Experiência
    const inputDescription = document.getElementsByClassName('description');
    if (user.experience !== '' && user.experience !== null && user.experience !== undefined) {
        inputDescription[0].value = user.experience;
    }

    // Input Especialização
    const inputEspecialização = document.getElementsByClassName('specialization');
    if (user.specialization !== '' && user.specialization !== null && user.specialization !== undefined) {
        inputEspecialização[0].value = user.specialization;
    }

    // Input Pinterest
    const inputPinterest = document.getElementsByClassName('pinterest');
    if (user.pinterest !== '' && user.pinterest !== null && user.pinterest !== undefined) {
        inputPinterest[0].value = user.pinterest;
    }

    // Input Linkedin
    const inputLinkedin = document.getElementsByClassName('linkedin');
    if (user.linkedin !== '' && user.linkedin !== null && user.linkedin !== undefined) {
        inputLinkedin[0].value = user.linkedin;
    }

    // Input Instagram
    const inputInstagram = document.getElementsByClassName('instagram');
    if (user.instagram !== '' && user.instagram !== null && user.instagram !== undefined) {
        inputInstagram[0].value = user.instagram;
    }

    // Atualizar dados
    const form = document.getElementById('data-form');
    form.addEventListener('submit', async (e)=> {
        e.preventDefault();
        const newData = {
            name: inputName[0].value,
            email: inputEmail[0].value,
            experience: inputDescription[0].value,
            specialization: inputEspecialização[0].value,
            pinterest: inputPinterest[0].value,
            instagram: inputInstagram[0].value,
            linkedin: inputLinkedin[0].value,
        }

        const res = await patchUser(id_user, newData);
        const div = document.getElementById('div-button-submit')
        if (res.message) {
            modalMessage(res.message, 'error', div)
        }

        if (res.id) {
            modalMessage('Seus dados foram atualizados com sucesso!', 'sucess', div)
        }
    });

    // Mudar senha
    const formPass = document.getElementById('password-form');
    formPass.addEventListener('submit', async (e)=> {
        e.preventDefault()
        const inputOldPassword = document.getElementsByClassName('old-password');
        const inputNewPassword = document.getElementsByClassName('new-password');
        const inputConfirmPassword = document.getElementsByClassName('confirm-password');

        const newData = {
            "old_password": inputOldPassword[0].value,
            "new_password": inputNewPassword[0].value, 
            "confirm_password": inputConfirmPassword[0].value 
        }

        const res = await changePassword(newData);

        const div = document.getElementById('profile-data-content');
        if (res.message) {
            modalMessage(res.message, 'error', div)
        }

        if (res.id) {
            modalMessage('Senha alterada com sucesso!', 'sucess', div)
        }
    })
}