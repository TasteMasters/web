export default async function modalMessage(message, typeMessage, elementWhereMessageGoes) {
    const div = document.createElement('div');
    if (typeMessage === 'error') {
        div.style.backgroundColor = 'red'
        div.style.backgroundColor = 'white'
    }

    if (typeMessage === 'sucess') {
        div.style.backgroundColor = 'green'
        div.style.backgroundColor = 'white'
    }

    const p = document.createElement('p')
    p.innerText = message;

    div.appendChild(p);
    
    const setTimeOutID = setTimeout(()=> {
        elementWhereMessageGoes.removeChild(div);
        clearInterval(setTimeOutID);
    }, 2000)
    
    elementWhereMessageGoes.appendChild(div);
}