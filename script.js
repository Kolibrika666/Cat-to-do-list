const rootDoc = document.getElementById('root')
const createBtn = document.getElementById('create')
const note = document.createElement('article')
const rezult = document.createElement('p')
const divBtn = document.createElement('div')
const checkBtn = document.createElement('button')
const deleteBtn = document.createElement('button')

checkBtn.className = 'check'
deleteBtn.className = 'delete'


function CreateNote () {
        const  userNote = prompt('Добавить дело', 'Дело');
        rootDoc.append(note)
        note.append(rezult,  divBtn)
        divBtn.append(checkBtn, deleteBtn)
        rezult.textContent = userNote
}

function DeleteBtnOnclick () {
    rezult.className = "delete__text"
}

function CheckBtnOnclick () {
    rezult.className = "check__text"
}

deleteBtn.onclick = DeleteBtnOnclick;
checkBtn.onclick = CheckBtnOnclick;
createBtn.onclick =  CreateNote ;


