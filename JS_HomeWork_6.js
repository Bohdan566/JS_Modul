
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let sort_array = array.sort((a, b) => {
//     return a - b;
// });

// console.log(array);
// console.log(sort_array);


// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let sort_array = array.sort((a, b) => {
//     return b - a;
// });

// console.log(sort_array);

// -- при помощи filter получить числа кратные 3

// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let filter_array = array.filter((value, index) => {
//     if(value % 3 === 0){
//         return value;
//     }
// });

// console.log(filter_array);

// - при помощи filter получить числа кратные 10

// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let filter_array = array.filter((value, index) => {
//     if(value % 10 === 0){
//         return value;
//     }
// });

// console.log(filter_array);

// -- перебрать (проитерировать) массив при помощи foreach()


// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let foreach_array = array.forEach((value, index) => {
    
//     console.log(value);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


// let array = [32, 12, 23, 45, 4, 5, 2, 1, 455, 67, 87, 43, 90, 54, 233, 333, 3333, 60, 989, 6767];

// let map_array = array.map((value, index) => {
//     return value * 3;
// });

// console.log(map_array);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.

// let array = ["Bohdan", "Andriy", "Vova", "Vasya", "Artem", "Anton", "Roman", "Serhiy", "Vika", "Pasha", "Stpsn", "Kuzya", "Ivanka",
//  "Kate", "Olena", "Alina"];

//  let sort_array = array.sort((a, b) => {
//     if( a < b){
//         return -1
//     }
//     return  1;
//  });

//  console.log(sort_array);

// -- отсортировать его по алфавиту  в нисходящем порядке.


// let array = ["Bohdan", "Andriy", "Vova", "Vasya", "Artem", "Anton", "Roman", "Serhiy", "Vika", "Pasha", "Stpsn", "Kuzya", "Ivanka",
//  "Kate", "Olena", "Alina"];

//  let sort_array = array.sort((a, b) => {
//     if(a > b){
//         return -1;
//     }

//     return 1
//  });

//  console.log(sort_array);

// -- отфильтровать слова длиной менее 5х символов

// let array = ["Bohdan", "Andriy", "Vova", "Vasya", "Artem", "Anton", "Roman", "Serhiy", "Vika", "Pasha", "Stpsn", "Kuzya", "Ivanka",
//  "Kate", "Olena", "Alina"];

// let filter_array = array.filter((value, index) => {
//     if(value.length < 5){
//         return value
//     };
// });

// console.log(filter_array);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let array = ["Bohdan", "Andriy", "Vova", "Vasya", "Artem", "Anton", "Roman", "Serhiy", "Vika", "Pasha", "Stpsn", "Kuzya", "Ivanka",
//  "Kate", "Olena", "Alina"];

// let map_array = array.map((value, index) => {
//     return value + "!";
// });

// console.log(map_array);



// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//  відсортувати його за  віком (зростання , а потім окремо спадання)

// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true} 
// ];

// let sortApp = users.sort((a, b) => {
    
//     return a.age -  b.age;
// });

// let sortDown = users.sort((a, b) => {
//     return b.age - a.age;
// });

// console.log(sortApp);
// console.log(sortDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sort_nameApp = users.sort((a, b) => {
//     return a.name.length - b.name.length;
// });

// let sort_nameDown = users.sort((a, b) => {
//     return b.name.length - a.name.length;
// });

// console.log(sort_nameApp);
// console.log(sort_nameDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let json_str_users = JSON.stringify(users);
// let users_2 = JSON.parse(json_str_users);


// let map_users_2 = users_2.map((value, index) => {
//     value.id = Math.floor(Math.random() * 100);
//     return value;
// });

// console.log(users);

// console.log(map_users_2);


// відсортувати його за індентифікатором

// let sort_user_2 = users_2.sort((a, b) => {
//     return a.id - b.id;
// });

// console.log(sort_user_2);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculate(a, b, callback){
//     return callback(a, b);
// };

// let result = calculate(+(prompt("Write first number")), +(prompt("Write second number")), function(a, b){
//     let simbol = prompt("Shose one of simbol to do operation", "+ - * / %");
//     if(simbol === "+"){
//         return a + b;
//     } else if (simbol === "-"){
//         return a - b;
//     } else if (simbol === "*"){
//         return a * b;
//     } else if (simbol === "/"){
//         return a / b;
//     }

//     return a % b
// });

// console.log(result);


// -- наисать функцию калькулятора с 3мя числами и колбеком


// function calculate(a, b, c, callback){
//     return callback(a, b, c);
// };
// let result = calculate(+(prompt("Write first number")), +(prompt("Write second number")), +(prompt("Write therdd number")) ,function(a, b, c){
//     let simbol = prompt("Shose one of the simbols to do operation", "+ - * /");
//     let simbol_2 = prompt("shose one of the simbols", "+ - * /");
//     if(simbol === "+" && simbol_2 === "+"){
//         return a + b + c;
//     } else if (simbol === "+" && simbol_2 === "-"){
//         return a + b - c;
//     } else if (simbol === "+" && simbol_2 === "*"){
//         return a + b * c;
//     } else if (simbol === "+" && simbol_2 === "/"){
//         return a + b / c;
//     }else if (simbol === "-" && simbol_2 === "+"){
//         return a - b + b;
//     } else if (simbol === "-" && simbol_2 === "-"){
//         return a - b - c;
//     } else if (simbol === "-" && simbol_2 === "*"){
//         return a - b * c;
//     } else if (simbol === "-" && simbol_2 === "/"){
//         return a - b / c;
//     } else if (simbol === "*" && simbol_2 === "+"){
//         return a * b + b;
//     } else if (simbol === "*" && simbol_2 === "-"){
//         return a * b - c;
//     } else if (simbol === "*" && simbol_2 === "*"){
//         return a * b * c;
//     } else if (simbol === "*" && simbol_2 === "/"){
//         return a * b / c;
//     } else if (simbol === "/" && simbol_2 === "+"){
//         return a / b + b;
//     } else if (simbol === "/" && simbol_2 === "-"){
//         return a / b - c;
//     } else if (simbol === "/" && simbol_2 === "*"){
//         return a / b * c;
//     } else if (simbol === "/" && simbol_2 === "/"){
//         return a / b / c;
//     }
// });
// console.log(result);



// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let cars = [ 
//     {producer:"subaru",model: "wrx",year: 2010,type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
// ];

// let filter_volume_1 = cars.filter((value, index) => {
//     if(value.volume >= 3){
//         return value;
//     };
// });

// console.log(filter_volume_1);

// - двигун = 2л

// let filter_volume_2 = cars.filter((value, index) => {
//     if(value.volume === 2){
//         return value;
//     };
// });

// console.log(filter_volume_2);

// - виробник мерс

// let filter_cars_1 = cars.filter((value, index) =>{
//     if(value.producer === "mercedes"){
//         return value
//     }
// });

// console.log(filter_power_1);

// - двигун більше 3х літрів + виробник мерседес

// let filter_cars_2 = cars.filter((value, index) =>{
//     if(value.producer === "mercedes" && value.volume >= 3){
//         return value
//     }
// });

// console.log(filter_cars_2);

// - двигун більше 3х літрів + виробник субару

// let filter_cars_3 = cars.filter((value, index) =>{
//     if(value.producer === "subaru" && value.power > 300){
//         return value
//     }
// });

// console.log(filter_cars_3);


// - сили більше ніж 300

// let filter_cars_4 = cars.filter((value, index)=>{
//     if(value.power >= 300){
//         return value;
//     }
// });

// console.log(filter_cars_4);


// - сили більше ніж 300 + виробник субару

// let filter_cars_5 = cars.filter((value, index)=>{
//     if(value.power >= 300 && value.producer === "subaru"){
//         return value;
//     }
// });

// console.log(filter_cars_5);

// мотор серіі ej

// let filter_cars_6 = cars.filter((value) => {

//         return value.engine.startsWith("ej");
// });

// console.log(filter_cars_6);

// - сили більше ніж 300 + виробник субару + мотор серіі ej


// let filter_cars_7 = cars.filter((value) => {
//     if(value.power >= 300 && value.producer === "subaru" && value.engine.startsWith("ej")){
//         return value;
//     }
// });

// console.log(filter_cars_7);

// - двигун меньше 3х літрів + виробник мерседес

// let filter_cars_8 = cars.filter((value) => {
//     if(value.power < 300 && value.producer === "mercedes"){
//         return value;
//     }
// });

// console.log(filter_cars_8);

//  двигун більше 2л + сили більше 250

// let filter_cars_9 = cars.filter((value) => {
//     if(value.power >= 250 && value.volume >= 2){
//         return value;
//     }
// });

// console.log(filter_cars_9);

// сили більше 250  + виробник бмв

// let filter_cars_10 = cars.filter((value) => {
//     if(value.power >= 250 && value.producer === "bmw"){
//         return value;
//     }
// });

// console.log(filter_cars_10);


//  взять слдующий массив
// -- отсортировать его по id пользователей

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];

// let sort_users_1 = usersWithAddress.sort((a, b) => {
//     return a.id - b.id;
// });

// console.log(sort_users_1);

// -- отсортировать его по id пользователей в обратном опрядке


// let sort_users_2 = usersWithAddress.sort((a, b) =>{
//     return b.id - a.id;
// });

// console.log(sort_users_2);

// -- отсортировать его по возрасту пользователей

// let sort_users_3 = usersWithAddress.sort((a, b) => {
//     return a.age - b.age;
// });

// console.log(sort_users_3);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sort_users_4 = usersWithAddress.sort((a, b) => {
//     return b.age - a.age;
// });
// console.log(sort_users_4);

// -- отсортировать его по имени пользователей

// let sort_users_5 = usersWithAddress.sort((a, b) => {
//     if( b.name > a.name){
//         return -1;
//     }

//     return 1;
// });
// console.log(sort_users_5);

// -- отсортировать его по имени пользователей в обратном порядке

// let sort_users_6 = usersWithAddress.sort((a, b) => {
//     if( b.name < a.name){
//         return -1;
//     }
//     return 1;
// });
// console.log(sort_users_6);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sort_users_7 = usersWithAddress.sort((a, b) => {
//     if( b.street > a.street){
//         return -1;
//     }
//     return 1;
// });
// console.log(sort_users_7);

// -- отсортировать его по номеру дома по возрастанию

// let sort_users_8 = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number;
// });
// console.log(sort_users_8);

// -- отфильтровать (оставить) тех кто младше 30

// let filter_users_1 = usersWithAddress.filter((value) =>{
//     return value.age > 30;
// });

// console.log(filter_users_1);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filter_users_2 = usersWithAddress.filter((value) =>{
//     return !value.status;
// });
// console.log(filter_users_2);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filter_users_3 = usersWithAddress.filter((value) =>{
//     if(!value.status && value.age < 30){
//         return value;
//     }
// });
// console.log(filter_users_3);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filter_users_4 = usersWithAddress.filter((value) =>{
//     if(value.address.number % 2 == 0){
//     return value
//     }
// });
// console.log(filter_users_4);


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то 
// необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// let cars = [ 
//     {owner: {name: "Bohdan", age: 23, experience: 2}, price: 3000, model: "wrx",year: 2010,power: 400}, 
//     {owner: {name: "Andriy", age: 34, experience: 3}, price: 3400, model: "legacy",year: 2007,power: 250}, 
//     {owner: {name: "Denis", age: 21, experience: 1}, price: 11000, model: "tribeca",year: 2011,power: 300}, 
//     {owner: {name: "Den", age: 34, experience: 5}, price: 1200, model: "leone",year: 1998,power: 140}, 
//     {owner: {name: "Dan", age: 32, experience: 7}, price: 2000, model: "impreza",year: 2014,power: 200}, 
//     {owner: {name: "Dimas", age: 35, experience: 3}, price: 40000, model: "outback",year: 2014,power: 165}, 
//     {owner: {name: "Ivan", age: 20, experience: 2}, price: 23000, model: "115",year: 2013,power: 120}, 
//     {owner: {name: "Vova", age: 23, experience: 5}, price: 12000, model: "315",year: 2010, power: 120}, 
//     {owner: {name: "Kiril", age: 43, experience: 6}, price: 7000, model: "650",year: 2009,power: 350}, 
//     {owner: {name: "Khoma", age: 54, experience: 9}, price: 34000, model: "320",year: 2012,power: 180}, 
//     {owner: {name: "Kuzya", age: 43, experience: 12}, price: 2400, model: "e200",year: 1990,power: 180}, 
//     {owner: {name: "Bob", age: 15, experience: 0.5}, price: 50000, model: "e63",year: 2017,power: 400}, 
//     {owner: {name: "Ron", age: 88, experience: 50}, price: 48000, model: "c250",year: 2017,power: 230} 
// ];

// let map_repair = cars.map((value, index) => {
//     let incriment_power = value.power / 10;
//     let incriment_price = (value.price / 20);
//     if(index % 2 == 0){
//         value.power += incriment_power;
//         value.price += incriment_price;
//         return value;
//     }
//     return value;
// });

// console.log(map_repair);

// let filter_experience = cars.filter((value, index) => {
//     if(value.owner.experience < 5 && value.owner.age > 25){
//         console.log(`${value.owner.name}, You need to take advanced training courses!!!`);
//         value.owner.experience += 1;
//         return value;
//     }
// });

// console.log(filter_experience);

// let price_sum = 0;

// for(let i of cars){
//    price_sum += i.price;
// //    console.log(price_sum); 
//    i++
// };

// console.log(price_sum);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

let arr = [45, 45, 1, 87, 45, 20, 1, 888, 65, 45];

document.write(arr);

let firstIndex = 10;
let lastIndex = -1;
let item = +prompt("Shoose number of array");


for( let i of arr){
    if(i === item && arr.indexOf(item) < firstIndex){
        firstIndex = arr.indexOf(item);
    } else if(i === item && arr.lastIndexOf(item) > lastIndex){
        lastIndex = arr.lastIndexOf(item);
    }

};

console.log(firstIndex);
console.log(lastIndex);

