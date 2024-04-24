export default function createRadioButton(name, value) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.value = value;
    const label = document.createElement('label');
    label.className = 'label-input-radio';
    label.textContent = value;
    label.appendChild(radio);
    return label;
}