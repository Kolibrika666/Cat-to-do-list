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
    for (let i = 1; i < 9; i++ ){
        const  userNote = prompt('Добавить дело', 'Дело');
        rootDoc.append(note)
        note.append(rezult,  divBtn)
        divBtn.append(checkBtn, deleteBtn)
        rezult.textContent = userNote
    }
}

function DeleteBtnOnclick () {
    rezult.className = "delete__text"
}

function CheckBtnOnclick () {
    rezult.className = "check__text"
}

createBtn.onclick = CreateNote();
deleteBtn.onclick = DeleteBtnOnclick;
checkBtn.onclick = CheckBtnOnclick;

// function Сommunication () {
//     do{
//         const  userNote = prompt('Добавить дело', 'Дело');
//         let count = 1
//         if (userNote && count < 9) {
//             CreateNote()
//             note.textContent = userNote
//             count++
//             Сommunication () 
//         } else {
//             const message = alert('Кажется хватит дел на сегодня')
//         }
//     } 
//     while(userNote)
// }

