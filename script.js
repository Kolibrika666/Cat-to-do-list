
const parent = document.getElementById('parent');
const elem = parent.querySelector('article');
const createBtn = document.getElementById('create');
const deleteBtn = document.querySelector('delete');
const checkBtn = document.querySelector('check');

function CreateElement () {
        let userMessage = prompt('Введите ваше дело')
            let clone = elem.cloneNode(true);
            clone.children[0].textContent = userMessage
            parent.appendChild(clone);
}

// function deleteElement () {

// }

// function checkElement () {

// }

createBtn.onclick = CreateElement;
// deleteBtn.onclick = deleteElement;
// checkBtn.onclick = checkElement;
