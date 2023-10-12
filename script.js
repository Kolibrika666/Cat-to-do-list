
const parent = document.getElementById('parent');
const elem = parent.querySelector('article');
const createBtn = document.getElementById('create');
const deleteBtn = document.getElementById('del');
const checkBtn = document.getElementById('ch');


function CreateElement () {
            userMessage = prompt('Введите ваше дело')
            let clone = elem.cloneNode(true);
            clone.className = "clean__text";
            clone.children[0].textContent = userMessage
            parent.appendChild(clone);
}

createBtn.onclick = CreateElement;
deleteBtn.onclick = function() { 
    elem.className = "delete__text";
}
checkBtn.onclick = function() { 
    elem.className = "check__text";
}
