
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const text = document.getElementById("textarea");
// text.value = localStorage.getItem("text");

// text.oninput = ( ev ) => {
    
//     localStorage.setItem("text", ev.target.value);
// };


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.



// let form_1 = document.getElementById("form_1");

// getDataForm(form_1);

// function setDataForm(tag) {
//     for(let i = 0; i < tag.length; i++){
//         let tagElement = tag[i];

//         if(tagElement.type === "checkbox" || tagElement.type === "radio"){
//             if(tagElement.checked){
//                 tagElement.value = true
//             } else {
//                 tagElement.value = false
//             }
//         }

//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }

// function getDataForm(tag){
//     for(let i = 0; i < localStorage.length; i++){
//         if(localStorage.hasOwnProperty(tag.children[i].id)){
//             tag.children[i].value = localStorage.getItem(tag.children[i].id)
//             if(tag.children[i].value === "true"){
//                 tag.children[i].setAttribute("checked", "checked")
//             }
//         }
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, 
// затем еще поредактировать и возможно еще..... Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - 
// нажатеи кнопки сохранить).

// let box_1 = document.getElementById("box_1");
// let textarea_2 = document.getElementById("textarea_2");
// let button_1 = document.getElementById("button_1");
// let classImage = document.getElementsByClassName("image");
// let left = document.getElementById("image_1");
// let right = document.getElementById("image_2");


// button_1.onclick = () =>{
//     localStorage.setItem(localStorage.length+1, textarea_2.value);
//     left.style.visibility = "visible";
//     right.style.visibility = "visible";
// }

// left.onclick = () => {
//     right.style.visibility = "visible"
//     let index;
//     for(const key in localStorage){
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === textarea_2.value){
//                 index = key;
//             }
//         }    
//     }
//     if(index === "1"){
//         left.style.visibility = "hidden";
//         return;
//     }

//     textarea_2.value = localStorage.getItem(index - 1);
// }


// right.onclick = () => {
//     left.style.visibility = "visible";
//     let index;
//     for(const key in localStorage){
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === textarea_2.value){
//                 index = key;
//             }
//         }    
//     }
//     if(index === localStorage.length.toString()){
//         right.style.visibility = "hidden";
//         return;
//     }

//     textarea_2.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
//--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
//в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


const ARRAY_USERS = "ARRAY_USERS"
let form_1 = document.getElementById("form_1");
let submit = document.getElementById("submit");
let content = document.getElementById("content");
let tempUser = {};

submit.onclick = ev => {
    let person = {...tempUser}
    
    for(let i = 0; i < form_1.children.length ; i++){
        let userElement = form_1.children[i];
        if(userElement.name && userElement.type !== "submit"){
            
            person[userElement.name] = userElement.value;
        }
    }
    if(!person.id){
        person.id = new Date().getTime();
    }
    setUser(person);
}

getUser();

function setUser(user){
    if(localStorage.hasOwnProperty(ARRAY_USERS)){
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        const find = arrayUsers.find( value => value.id === user.id);
        if(find){
            let filter = arrayUsers.filter( value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
            
        } else {
            arrayUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
        }

    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]));
    }
}

function getUser(){
    if(localStorage.hasOwnProperty(ARRAY_USERS)){
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        
        for(const user of arrUser){
            createDivUser(user);
        }
    }
    
    
}

function createDivUser(user){
    let main = document.createElement("div");
    
    let flag = true;
    for(let key in user){
        if(flag){
            let h3 = document.createElement("h3");
            h3.innerText = `${key}: ${user[key]}`;
            main.appendChild(h3);

            flag = false;
        } else {
            let p = document.createElement("p");
            p.innerText = `${key}: ${user[key]}`;
            main.appendChild(p);
        }
    }

    main.style = "width : 19.7%; border : 2px solid blue; float: left";

    let deleteUsers = document.createElement("button");
    let editUsers = document.createElement("button");

    deleteUsers.innerText = "Delete";
    editUsers.innerText = "Edit";

    editUsers.onclick = function(){
        editUser(user.id);
        
    }

    deleteUsers.onclick = function(){
        deleteUser(user.id)
    }


    main.appendChild(deleteUsers);
    main.appendChild(editUsers);
    content.appendChild(main);
    return main;
}

function deleteUser(id) {
    let arrUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
    let filteredUsers = arrUsers.filter(user => user.id !== id)
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filteredUsers));
    location.reload();
}

function editUser(id){
    let arrUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
    let find = arrUsers.find(user => user.id === id);
    for(let i = 0; i < form_1.children.length ; i++){
        let userElement = form_1.children[i];
        if(userElement.name && userElement.type !== "submit"){
            for(let key in find){
                if(userElement.name === key){
                    userElement.value = find[key];
                }
            }
        }
    }
    tempUser = find;
}





