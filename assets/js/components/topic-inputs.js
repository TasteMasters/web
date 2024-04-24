export default function addTopicInputs(container) {
    const hr = document.createElement('hr');
    
    const p = document.createElement('p');
    p.innerText = `Tópico`;
    
    const topicTitleLabel = document.createElement('label');
    topicTitleLabel.textContent = 'Título do Tópico:';
    const topicTitleInput = document.createElement('input');
    topicTitleInput.type = 'text';
    topicTitleInput.name = 'topicTitle';
    topicTitleInput.required = true;
    topicTitleLabel.appendChild(topicTitleInput);

    const topicDurationLabel = document.createElement('label');
    topicDurationLabel.textContent = 'Duração (minutos):'; 
    const topicDurationInput = document.createElement('input');
    topicDurationInput.required = true;
    topicDurationInput.type = 'number'; 
    topicDurationInput.name = 'topicDuration'; 
    topicDurationLabel.appendChild(topicDurationInput);

    const topicDescriptionLabel = document.createElement('label');
    topicDescriptionLabel.textContent = 'Descrição do Tópico:';
    const topicDescriptionInput = document.createElement('input');
    topicDescriptionInput.required = true;
    topicDescriptionInput.type = 'text';
    topicDescriptionInput.name = 'topicDescription';
    topicDescriptionLabel.appendChild(topicDescriptionInput);

    const topicVideoLabel = document.createElement('label');
    topicVideoLabel.textContent = 'Link do Vídeo:';
    const topicVideoInput = document.createElement('input');
    topicVideoInput.type = 'text';
    topicVideoInput.name = 'topicVideo';
    topicVideoLabel.appendChild(topicVideoInput);

    const removeTopicButton = document.createElement('button');
    removeTopicButton.textContent = 'Remover Tópico';
    removeTopicButton.type = 'button';
    removeTopicButton.addEventListener('click', () => {
        topicTitleLabel.parentNode.removeChild(hr);
        topicTitleLabel.parentNode.removeChild(p);
        topicTitleLabel.parentNode.removeChild(topicTitleLabel);
        topicDescriptionLabel.parentNode.removeChild(topicDescriptionLabel);
        topicVideoLabel.parentNode.removeChild(topicVideoLabel);
        removeTopicButton.parentNode.removeChild(removeTopicButton);
    });

    container.appendChild(hr);
    container.appendChild(p);
    container.appendChild(topicTitleLabel);
    container.appendChild(topicDurationLabel);
    container.appendChild(topicDescriptionLabel);
    container.appendChild(topicVideoLabel);
    container.appendChild(removeTopicButton);
}