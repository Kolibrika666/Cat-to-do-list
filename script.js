
const parent = document.getElementById('parent');
const elem = parent.querySelector('article');
const createBtn = document.getElementById('create');

function CreateElement () {
        let userMessage = prompt('Введите ваше дело')
            let clone = elem.cloneNode(true);
            clone.children[0].textContent = userMessage
            parent.appendChild(clone);
}

createBtn.onclick = CreateElement;

