export default function main(content) {
    const div = document.createElement('div')
    div.id = 'content';
    div.innerHTML = content;

    const main = document.createElement('main');
    main.appendChild(div);
    return main;
}