
// task2

// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать 
// только 1 раз в одном объекте )

// let propertyes = {
//     dog: {name: "Klinton", age: 12, status: false},
//     person : {name: "Bohdan", age: 26, status: true},
//     car : {name: "Skoda_Octavia_A5", age: 10, status: true },
//     flat : {where: "Lviv", age: 2, status: false},
//     book : {name: "Sherlok", age: 67, status: true}
// }
// console.log(propertyes);

// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let obj = {
//     building: {place: "Lviv", flor: 5, square: 65, status: true},
//     driver: {name: "Dimon", age: 30, car: "Skoda", status: false},
//     toy: {name: "rabbit", age: 20, status: true},
//     table: ["kitchen_furniture", 10, true],
//     bag: {name: "TommyHyphiger", age: 2, status: false}
// }

// console.log(obj);

// При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for(elements_propertyes in propertyes){
//     console.log(elements_propertyes);
// }


// for(let elements_obj in obj ){
//     console.log(elements_obj)
// }

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keys_propertyes = Object.keys(propertyes);
// console.log(keys_propertyes);

// let keys_obj = Object.keys(obj);
// console.log(keys_obj);

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 

// let cars1 = [
//     {name: "Volvo", model: "XC90", graduation_year: 2012, power: 3.0, color: "grey"},
//     {name: "Volvo", model: "XC70", graduation_year: 2007, power: 2.4, color: "grey"},
//     {name: "Volvo", model: "XC60", graduation_year: 2008, power: 2.4, color: "black"},
//     {name: "Volvo", model: "V70", graduation_year: 2007, power: 2.5, color: "green"},
//     {name: "Volvo", model: "V70", graduation_year: 2000, power: 3.0, color: "borgundy"},
//     {name: "Volvo", model: "V70", graduation_year: 1998, power: 2.3, color: "blue"},
//     {name: "Volvo", model: "V60", graduation_year: 2013, power: 2.4, color: "white"},
//     {name: "Volvo", model: "V50", graduation_year: 2003, power: 2.0, color: "black"},
//     {name: "Volvo", model: "V40", graduation_year: 2012, power: 2.5, color: "yellow"},
//     {name: "Volvo", model: "S80", graduation_year: 2013, power: 2.5, color: "white"}
// ];

// console.log(cars);

// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.

// let cities = [
//     {name: "Lviv", population: 2000000, country: "Ukraine", region: "West side of the country"},
//     {name: "Kyiv", population: 10000000, country: "Ukraine", region: "Capital of the country"},
//     {name: "Istanbul", population: 20000000, country: "Turkey", region: "South of the country"},
//     {name: "Larnaka", population: 300000, country: "Kiprus", region: "North  of the country"},
//     {name: "Palma_de_Majorka", population: 400000, country: "French", region: "Island in the sea"},
//     {name: "Yamayka", population: 20000000, country: "USA", region: "South of the country"},
// ];

// console.log(cities);

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars2 = [
//     {name: "Volvo", model: "XC90", graduation_year: 2012, power: 3.0, color: "grey"},
//     {name: "Volvo", model: "XC70", graduation_year: 2007, power: 2.4, color: "grey"},
//     {name: "Volvo", model: "XC60", graduation_year: 2008, power: 2.4, color: "black"},
//     {name: "Volvo", model: "V70", graduation_year: 2007, power: 2.5, color: "green"},
//     {name: "Volvo", model: "V70", graduation_year: 2000, power: 3.0, color: "borgundy"},
//     {name: "Volvo", model: "V70", graduation_year: 1998, power: 2.3, color: "blue"},
//     {name: "Volvo", model: "V60", graduation_year: 2013, power: 2.4, color: "white"},
//     {name: "Volvo", model: "V50", graduation_year: 2003, power: 2.0, color: "black"},
//     {name: "Volvo", model: "V40", graduation_year: 2012, power: 2.5, color: "yellow"},
//     {name: "Volvo", model: "S80", graduation_year: 2013, power: 2.5, color: "white"},
//     {driver_name: "VoVa", age: 30, point: "man", experience: 10}
// ];

// console.log(cars);

// проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;

// while(i < cars1.length){
//     console.log(cars1[i]);
//     i++;
// };


// let j = 0;

// while( j < cities.length){
//     console.log(cities[j]);
//     j++
// };

// let k = 0;

// while( k < cars2.length){
//     console.log(cars2[k]);
//     k++;
// };

// проитерировать каждый массив из задания 5,6,7 при помощи for

// for( let i = 0; i < cars1.length; i++ ){
//     console.log(cars1[i]);
// };

// for( let j = 0; j < cities.length; j++){
//     console.log(cities[j]);
// };

// for(let k = 0; k < cars2.length; k++){
//     console.log(cars2[k]);
// };

// роитерировать каждый массив из задания 5,6,7 при помощи  for of

// for( let i of cars1){
//     console.log(i);
// };

// for(let j of cities){
//     console.log(j);
// };

// for( let k of cars2){
//     console.log(k);
// };

// взять объекты из задания 1 и превратить каждый в json


// let propertyes = {
//     dog: {name: "Klinton", age: 12, status: false},
//     person : {name: "Bohdan", age: 26, status: true},
//     car : {name: "Skoda_Octavia_A5", age: 10, status: true },
//     flat : {where: "Lviv", age: 2, status: false},
//     book : {name: "Sherlok", age: 67, status: true}
// };

// let dog_json = JSON.stringify(propertyes.dog);
// let person_json = JSON.stringify(propertyes.person);
// let car_json = JSON.stringify(propertyes.car);
// let flat_json = JSON.stringify(propertyes.flat);
// let book_json = JSON.stringify(propertyes.book);


// console.log(dog_json);
// console.log(person_json);
// console.log(car_json);
// console.log(flat_json);
// console.log(book_json);


// взять json из задания 11 и превратить их обратно в объекты.

// let dog_goto_object = JSON.parse(dog_json);
// let person_goto_object = JSON.parse(person_json);
// let car_goto_object = JSON.parse(car_json);
// let flat_goto_object = JSON.parse(flat_json);
// let book_goto_object = JSON.parse(book_json);


// console.log(dog_goto_object);
// console.log(person_goto_object);
// console.log(car_goto_object);
// console.log(flat_goto_object);
// console.log(book_goto_object);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let cars1 = [
//     {name: "Volvo", model: "XC90", graduation_year: 2012, power: 3.0, color: "grey"},
//     {name: "Volvo", model: "XC70", graduation_year: 2007, power: 2.4, color: "grey"},
//     {name: "Volvo", model: "XC60", graduation_year: 2008, power: 2.4, color: "black"},
//     {name: "Volvo", model: "V70", graduation_year: 2007, power: 2.5, color: "green"},
//     {name: "Volvo", model: "V70", graduation_year: 2000, power: 3.0, color: "borgundy"},
//     {name: "Volvo", model: "V70", graduation_year: 1998, power: 2.3, color: "blue"},
//     {name: "Volvo", model: "V60", graduation_year: 2013, power: 2.4, color: "white"},
//     {name: "Volvo", model: "V50", graduation_year: 2003, power: 2.0, color: "black"},
//     {name: "Volvo", model: "V40", graduation_year: 2012, power: 2.5, color: "yellow"},
//     {name: "Volvo", model: "S80", graduation_year: 2013, power: 2.5, color: "white"}
// ];

// let index = 0;

// for(index of cars1){
    
//     let new_index = JSON.stringify(index);
//     console.log(new_index);
//     index++;
// };

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json

// let cities = [
//     {name: "Lviv", population: 2000000, country: "Ukraine", region: "West side of the country"},
//     {name: "Kyiv", population: 10000000, country: "Ukraine", region: "Capital of the country"},
//     {name: "Istanbul", population: 20000000, country: "Turkey", region: "South of the country"},
//     {name: "Larnaka", population: 300000, country: "Kiprus", region: "North  of the country"},
//     {name: "Palma_de_Majorka", population: 400000, country: "French", region: "Island in the sea"},
//     {name: "Yamayka", population: 20000000, country: "USA", region: "South of the country"},
// ];

// let index_2 = 0;

// for(index_2 of cities){
//     let cities_json = JSON.stringify(index_2);
//     console.log(cities_json);
//     index_2++;
// };

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars2 = [
//     {name: "Volvo", model: "XC90", graduation_year: 2012, power: 3.0, color: "grey"},
//     {name: "Volvo", model: "XC70", graduation_year: 2007, power: 2.4, color: "grey"},
//     {name: "Volvo", model: "XC60", graduation_year: 2008, power: 2.4, color: "black"},
//     {name: "Volvo", model: "V70", graduation_year: 2007, power: 2.5, color: "green"},
//     {name: "Volvo", model: "V70", graduation_year: 2000, power: 3.0, color: "borgundy"},
//     {name: "Volvo", model: "V70", graduation_year: 1998, power: 2.3, color: "blue"},
//     {name: "Volvo", model: "V60", graduation_year: 2013, power: 2.4, color: "white"},
//     {name: "Volvo", model: "V50", graduation_year: 2003, power: 2.0, color: "black"},
//     {name: "Volvo", model: "V40", graduation_year: 2012, power: 2.5, color: "yellow"},
//     {name: "Volvo", model: "S80", graduation_year: 2013, power: 2.5, color: "white"},
//     {driver_name: "VoVa", age: 30, point: "man", experience: 10}
// ];

// let index_3 = 0;

// for(index_3 of cars2){
//     let cars2_json = JSON.stringify(index_3);
//     console.log(cars2_json);
//     let cloned_cars2 = JSON.parse(cars2_json);
//     console.log(cloned_cars2);
//     index_3++;
// };

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     {name: "Bohdan", age: 26, skills: ["klever", "hard_working", "reasonable"]},
//     {name: "Nazar", age: 32, skills: ["klever", "hard_working", "reasonable", "owner of IT company"]},
//     {name: "Ivan", age: 21, skills: ["klever", "hard_working", "reasonable"]},
//     {name: "Andriy", age: 29, skills: ["klever", "hard_working", "reasonable", "talkative"]},
//     {name: "Oleh", age: 28, skills: ["klever", "hard_working", "reasonable", "multitask"]}
// ];

// let index_users = 0;
// let index_skills = 0;

// for(index_users of users){
//     for(index_skills of index_users.skills){
//         console.log(index_skills);
//         index_skills++;
//     }
//     console.log("---------------");
//     index_users++;
// };

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех 
// пользователей в отедльный массив.


// let users = [
//     {name: "Bohdan", age: 26, skills: ["klever", "hard_working", "reasonable"]},
//     {name: "Nazar", age: 32, skills: ["klever", "hard_working", "reasonable", "owner of IT company"]},
//     {name: "Ivan", age: 21, skills: ["klever", "hard_working", "reasonable"]},
//     {name: "Andriy", age: 29, skills: ["klever", "hard_working", "reasonable", "talkative"]},
//     {name: "Oleh", age: 28, skills: ["klever", "hard_working", "reasonable", "multitask"]}
// ];


// let index_users = 0;
// let index_skills = 0;
// let new_users = [];

// for(index_users of users){
//     for(index_skills of index_users.skills){
//         console.log(index_skills);
//         new_users.push(index_skills);
//         index_skills++;
//     }
//     console.log("---------------");
//     index_users++;
// };

// console.log(new_users);

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for(let index of users){
//     console.log(index);
//     for(index_2 of index.skills){
//         console.log(index_2);
//         index_2++;
//     }
//     console.log("--------------------------");
//     index++;
// };

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх 
// в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let arr_address = [];

// for( let index of users){
//     arr_address.push(index.address);
//     index++;
// };

// console.log(arr_address);

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
// Всі данні в одному блоці.

// let wrap = document.createElement("div");

// document.body.appendChild(wrap);


// for( let user of users){
//     let userDiv = document.createElement("div");
//     userDiv.innerText = `My name is ${user.name} I am ${user.age} my status is ${user.status} my addres is: 
//     ${user.address.city}. ${user.address.country}. ${user.address.street}. ${user.address.houseNumber}`;
//     wrap.appendChild(userDiv);
//     console.log(userDiv);
// };



// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
// розділивши всі властивості по своїм блокам (div>div*4)


// let wrap = document.createElement("div");

// document.body.appendChild(wrap);

// for( let user of users){
//     let userDiv = document.createElement("div");
//     userDiv.classList.add("userDiv");

//     let userDiv_1 = document.createElement("div");
//     let userDiv_2 = document.createElement("div");
//     let userDiv_3 = document.createElement("div");
//     let userDiv_4 = document.createElement("div");

//     userDiv_1.innerText = `Name: ${user.name}`;
//     userDiv_2.innerText = `Age: ${user.age}`;
//     userDiv_3.innerText = `Status: ${user.status}`;
//     userDiv_4.innerText = `Address: ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;

//     userDiv.appendChild(userDiv_1);
//     userDiv.appendChild(userDiv_2);
//     userDiv.appendChild(userDiv_3);
//     userDiv.appendChild(userDiv_4);
//     wrap.appendChild(userDiv);

// };

// let userDiv_style = document.getElementsByClassName("userDiv");

// for( let div_number of userDiv_style){
//     div_number.style.margin = "20px";
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості 
// по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let wrap = document.createElement("div");

// document.body.appendChild(wrap);

// for( let user of users){
//     let userDiv = document.createElement("div");
//     userDiv.classList.add("userDiv");

//     let userDiv_1 = document.createElement("div");
//     let userDiv_2 = document.createElement("div");
//     let userDiv_3 = document.createElement("div");
//     let userDiv_4 = document.createElement("div");
//     let userDiv_4_1 = document.createElement("div");
//     let userDiv_4_2 = document.createElement("div");
//     let userDiv_4_3 = document.createElement("div");
//     let userDiv_4_4 = document.createElement("div");

//     userDiv_1.innerText = `Name: ${user.name}`;
//     userDiv_2.innerText = `Age: ${user.age}`;
//     userDiv_3.innerText = `Status: ${user.status}`;
//     userDiv_4_1.innerText = "Address: " + user.address.city;
//     userDiv_4_2.innerText = " " + user.address.country;
//     userDiv_4_3.innerText = " " + user.address.street;
//     userDiv_4_4.innerText = " " + user.address.houseNumber;

//     userDiv_4.classList.add("userDiv_4");

//     userDiv.appendChild(userDiv_1);
//     userDiv.appendChild(userDiv_2);
//     userDiv.appendChild(userDiv_3);
//     userDiv.appendChild(userDiv_4);

//     userDiv_4.appendChild(userDiv_4_1);
//     userDiv_4.appendChild(userDiv_4_2);
//     userDiv_4.appendChild(userDiv_4_3);
//     userDiv_4.appendChild(userDiv_4_4);
//     wrap.appendChild(userDiv);

// };

// let userDiv_style = document.getElementsByClassName("userDiv");

// for( let div_number of userDiv_style){
//     div_number.style.margin = "20px";
// };

// let userDiv_4_style = document.getElementsByClassName("userDiv_4");

// for( let div_4_number of userDiv_4_style){
//     div_4_number.style.display = "flex";
// };


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let users_cities = {};


// for(const users of usersWithId){

//     for(const cities of citiesWithId){

//         if(users.id === cities.user_id){
//             users.address = cities;
//         } 
//     } 
// }


// users_cities = usersWithId;

// console.log(users_cities);



// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу



// let div_id = document.createElement("div");

// div_id.classList.add("div_class");

// div_id.innerText = "Hello Bohdan!!";

// document.body.appendChild(div_id);

// let div_class = document.getElementsByClassName("div_class");
// let div_tagName = document.getElementsByTagName("div");

// console.log(div_id.innerText);

// for(index_class of div_class){
//     console.log(index_class.innerText);
// };

// for(index_tagName of div_tagName){
//     console.log(index_tagName.innerText);
// };

// - змінити цей текст використовуючи селектори id, class,  tag

// div_id.innerText = "Goog Lack";

// console.log(div_id.innerText);

// for(index2_class of div_class){
//     index2_class.innerText = "Good lack";
//     console.log(index2_class.innerText);
// };

// for(index2_tagName of div_tagName){
//     console.log(index2_tagName.innerText);
// };

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// div_id.style.width = "400px";
// div_id.style.height = "150px";

// for(index3_class of div_class){
//     index3_class.style.width = "400px";
//     index3_class.style.height = "150px";
    
// };

// for(index3_tagName of div_tagName){
//     index3_tagName.style.width = "400px";
//     index3_tagName.style.height = "150px";
// };




// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let chart = document.createElement("table");

// let tr = document.createElement("tr");
// let td_1 = document.createElement("td");
// let td_2 = document.createElement("td");
// let td_3 = document.createElement("td");

// tr.appendChild(td_1);
// tr.appendChild(td_2);
// tr.appendChild(td_3);

// chart.appendChild(tr);

// document.body.appendChild(chart);



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let chart = document.createElement("table");

// for(let index = 0; index < 11; index++ ){

//     const tr = document.createElement("tr");

//     let td_1 = document.createElement("td");
//     let td_2 = document.createElement("td");
//     let td_3 = document.createElement("td");

//     tr.appendChild(td_1);
//     tr.appendChild(td_2);
//     tr.appendChild(td_3);

//     chart.appendChild(tr);
// };

// document.body.appendChild(chart);





// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені


// let chart = document.createElement("table");

// for(let i = 0; i < 10; i++){
//     let tr = document.createElement("tr");

//     for(let j = 0; j < 5; j++){
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     };

//     chart.appendChild(tr);
// };

// document.body.appendChild(chart);




// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. 
// n та m отримати з prompt


// let chart = document.createElement("table");

// let lenght_1 = prompt("Tr quantyti");
// let lenght_2 = prompt("Td quantity");


// for(let i = 0; i < lenght_1; i++){
//     let tr = document.createElement("tr");

//     for(let j = 0; j < lenght_2; j++){
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     };

//     chart.appendChild(tr);
// };

// document.body.appendChild(chart);


// -Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class




let elements = document.getElementsByTagName("*")

for(element of elements){
    if(element.getAttribute("class")){
        console.log(element);
    };
};




// - знайти всі параграфи ,та змінити текст на hello oktenweb!

let elements_p = document.getElementsByTagName("p");

for(p of elements_p){
    p.innerText = "Hello";
};




// - знайти всі div та змінити ім колір на червоний

let elements_div = document.getElementsByTagName("div");

for(div of elements_div){
    div.style.color = "red";
};


