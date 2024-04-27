export default function createRadioButton(name, value, checked) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.value = value;
    radio.checked = checked;
    const label = document.createElement('label');
    label.className = 'label-input-radio';
    label.textContent = value;
    label.appendChild(radio);
    return label;
}