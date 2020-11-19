
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div_1 = document.createElement("div");
// let button_1 = document.createElement("button");

// div_1.id = "text";
// button_1.classList = "button_1";
// button_1.innerText = "Видалити Div";
// button_1.onclick = () => {
//     div_1.style.display = "none";
// }
// document.body.appendChild(div_1);
// div_1.appendChild(button_1);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button_1 = document.createElement("button");

// button_1.classList = "button_1";
// button_1.innerText = "Видалити Button";
// button_1.onclick = () => {
//     button_1.style.display = "none";
// }

// document.body.appendChild(button_1);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та 
//перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement("input");
// let button = document.createElement("button");

// input.type = "text";
// input.innerText = "Введіть ваш вік";
// button.innerText = "Підтвердити";

// button.onclick = () => {
//     if(input.value < 18){
//         alert("Your age is less than 18");
//     } else {
//         alert("your age is more than 18")
//     }
// };

// document.body.appendChild(input);
// document.body.appendChild(button);

// - Создайте меню, которое раскрывается/сворачивается при клике

// let ul = document.createElement("ul");
// ul.innerText = "MENU";
// let box = document.createElement("ul");
// ul.appendChild(box);
// let flag = false;


// for(let i = 0; i < 8; i++){
//     let li = document.createElement("li");
//     li.classList = "listMenu";
//     li.innerText = `list number ${i+1}`;
//     box.appendChild(li);
// }

// ul.onclick = () => {
//     if(flag){
//         box.style.display = "block";
//         flag = false;
//     } else {
//         box.style.display = "none";
//         flag = true;
//     }
// };

// document.body.appendChild(ul);

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.

// let arrComents = [
//     {title : 'rule1', body:"//Це є коментар номер 1"},
//     {title : 'rule2', body:"//Це є коментар номер 2"},
//     {title : 'rule3', body:"//Це є коментар номер 3"},
//     {title : 'rule4', body:"//Це є коментар номер 4"},
//     {title : 'rule5', body:"//Це є коментар номер 5"},
//     {title : 'rule6', body:"//Це є коментар номер 6"},
//     {title : 'rule7', body:"//Це є коментар номер 7"},
//     {title : 'rule8', body:"//Це є коментар номер 8"},
// ];

// let content = document.getElementById("content");

// arrComents.forEach(item => {
//     let div = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let p = document.createElement("p");
//     let button = document.createElement('button');

//     h2.innerText = item.title;
//     p.innerText = item.body;

//     button.innerText = "Приховати вміст";

//     button.onclick = () => {
//         p.hidden ? p.hidden = false : p.hidden = true;
//     };

//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     content.appendChild(div);
// });


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація 
// з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let content = document.getElementById("content");

// let form_1 = document.createElement("form")
// let form_2 = document.createElement("form")
// let button = document.createElement("button");

// form_2.style. margin = "20px";
// form_1.style. margin = "20px";

// button.innerText = "alert info";
// button.style. margin = "20px";
// button.onclick = ev => {
//     console.log(input_1.value);
//     console.log(input_2.value);
//     console.log(input_3.value);
//     console.log(input_4.value);
// };

// let input_1 = document.createElement("input");
// let input_2 = document.createElement("input");
// let input_3 = document.createElement("input");
// let input_4 = document.createElement("input");

// form_1.appendChild(input_1);
// form_1.appendChild(input_2);
// form_2.appendChild(input_3);
// form_2.appendChild(input_4);
// content.appendChild(form_1);
// content.appendChild(form_2);
// content.appendChild(button);

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let content = document.getElementById("content");

// let div = document.createElement("div");
// let form = document.createElement("form");
// let input_row = document.createElement("input");
// let input_column = document.createElement("input");
// let input_text = document.createElement("input");
// let button = document.createElement("button");

// button.innerText = "Обробити дані";
// button.style.margin = "30px";
// button.onclick = ev => {
//    Constructor(input_row.value, input_column.value, input_text.value, content)
// }

// let Constructor  = function(row, column, text, tag) {
//     this.row = row;
//     this.column = column;
//     this.content = content;

//     let table = document.createElement("table");

//     for(let i = 0; i < row; i++){
//         let tr = document.createElement("tr");
//         for(let j = 0; j < column; j++){
//             let td = document.createElement("td");
//             td.innerText = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table);

// };


// form.appendChild(input_row);
// form.appendChild(input_column);
// form.appendChild(input_text);
// div.appendChild(form);
// div.appendChild(button);
// content.appendChild(div);




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// ????????????????????????????????????????????????????????????????????????????????????????????????
// ????????????????????????????????????????????????????????????????????????????????????????????????
// фото не відображаються

// let photos = [
//     {id: 1, img_url: "image12.jpg"},
//     {id: 2, img_url: "image13.jpg"},
//     {id: 3, img_url: "image14.jpg"},
//     {id: 4, img_url: "image15.jpg"},
//     {id: 5, img_url: "image16.jpg"},
//     {id: 6, img_url: "image20.jpg"},
//     {id: 7, img_url: "image37.jpg"},
//     {id: 8, img_url: "image22.jpg"},
//     {id: 9, img_url: "image25.jpg"},
//     {id: 10, img_url: "image29.jpg"}
// ];

// let content = document.getElementById("content");
// let image = document.createElement("img");
// let button_1 = document.createElement("button");
// let button_2 = document.createElement("button");

// button_1.innerText = "Move Left";
// button_2.innerText = "Move Right";
// let index = 0;

// image.width = 300;

// image.src = photos[index].img_url;

// button_1.onclick = () => {
//     if(index - 1 < 0){
//         index = photos.length - 1;
//     } else {
//         index -= 1;
//     }
//     image.src = photos[index].img_url; 
// }

// button_2.onclick = () => {
//     if(index + 1 > photos.length - 1){
//         index = 0;
//     } else {
//         index += 1;
//     }
//     image.src = photos[index].img_url;
// }

// content.appendChild(button_1);
// content.appendChild(image);
// content.appendChild(button_2);

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let arr = ["fack", "beech"];

// let content = document.getElementById("content");

// let input = document.createElement("input");
// let button = document.createElement("button");

// button.innerText = "Перевірити";
// button.onclick = () => {
//     for(let index = 0; index < arr.length; index++){
//         if(input.value == arr[index]){
//             alert("Не використовуйте ненормативну лексику");
//             return
//          }
//     }
//     alert(`Ви ввели ${input.value}`);
// }

// content.appendChild(input);
// content.appendChild(button);


//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arr = ["fack", "beech", "stupid"];
// let content = document.getElementById("content");
// let input = document.createElement("input");
// let button = document.createElement("button");
// button.innerText = "Перевірити";
// button.onclick = () => {
//     for(let index = 0; index < arr.length; index++){
//         if(input.value.includes(arr[index])){
//             alert("Не використовуйте ненормативну лексику");
//             return
//         } 
//     }
//     alert(`Ви ввели ${input.value}`);
// }
// content.appendChild(input);
// content.appendChild(button);


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам 
// которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let container = document.createElement("div");
// let wrap = document.getElementById("wrap");
// let div = document.getElementById("content");
// let h2 = document.getElementsByTagName("h2");
// let box = document.createElement("div");
// let menu = document.createElement("ul");

// menu.innerText = "MENU";

// for(header of h2){
//     let li = document.createElement("li");
//     let a = document.createElement("a");
//     let flag = "flag" + 1;

//     a.href = "#" + flag;
//     a.innerText = header.innerText;

//     li.setAttribute("id", flag);

//     menu.appendChild(li);
//     li.appendChild(a);

//     li.onclick = () => {
        
//     };

// }

// box.appendChild(menu);
// div.appendChild(box);
// container.appendChild(div);
// container.appendChild(wrap);
// document.body.appendChild(container);

// container.style.display = "flex";
// div.style.width = "40%";
// wrap.style.width = "60%";



// -- взять массив пользователей

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// let content = document.getElementById("content");

// let box = document.createElement("div");

// let check_1 = document.createElement("input");
// let check_2 = document.createElement("input");
// let check_3 = document.createElement("input");
// let label_1 = document.createElement("label");
// let label_2 = document.createElement("label");
// let label_3 = document.createElement("label");
// let button = document.createElement("button");

// check_1.type = "checkbox";
// check_2.type = "checkbox";
// check_3.type = "checkbox";

// check_1.style.marginRight = "30px";
// check_2.style.marginRight = "30px";
// check_3.style.marginRight = "30px";

// label_1.style.color = "red";
// label_2.style.color = "red";
// label_3.style.color = "red";

// label_1.innerText = "осталяет со статусом false";
// label_2.innerText = "оставляет старше 29 лет включительно";
// label_3.innerText = "оставляет тех у кого город киев";


// button.innerText = "Перевірка";

// function createUsers (array){
//     let div = document.createElement("div");
//     array.forEach(element => {
//         let user = document.createElement("div");
//         user.innerText = JSON.stringify(element);

//         div.appendChild(user);
//     })
//     return div
// }

// button.onclick = ev => {
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress));
//     if(check_1.checked){
//         myArray = myArray.filter((value) => {
//             return !value.status
//         })
//     };

//     if(check_2.checked){
//         myArray = myArray.filter((value) =>{
//             return value.age > 29
//         })
//     };

//     if(check_3.checked){
//         myArray = myArray.filter((value) =>{
//             return value.address.city === "Kyiv"
//         })
//     };

//     box.innerText = " ";
//     box.appendChild(createUsers(myArray));
// }

// box.appendChild(createUsers(usersWithAddress));
// content.appendChild(box);
// content.appendChild(label_1);
// content.appendChild(check_1);
// content.appendChild(label_2);
// content.appendChild(check_2);
// content.appendChild(label_3);
// content.appendChild(check_3);

// content.appendChild(button);





