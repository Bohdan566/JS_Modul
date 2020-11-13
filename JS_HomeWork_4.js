
//  створити функцію яка виводить масив

// let array = [1, 2, 3, 4];

// function arr_function(arr){
//     console.log(arr);
//     for(let arg of arr){
//         console.log(arg);
//     };
// };

// arr_function(array);

//  створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.


// function random(lenght, min, max){

//     let array = [];

//     for(let i = 0; i < lenght; i++){
//         array.push(Math.floor(Math.random() * (max - min) + min));
//     };
//     return array;
// };

// const random_array1 = random(10, 10, 100);

// function arr_function(arr){
//     console.log(arr);
//     for(let arg of arr){
//         console.log(arg);
//     };
// };

// arr_function(random_array1);

// створити функцію яка приймає три числа та виводить та повертає найменьше.


// function arr_function (num_1, num_2, num_3){
//     let minimum = num_3;
//     if(num_1 < num_2 && num_1 < num_3){
//          minimum = num_1;
//     } else if (num_2 < num_1 && num_2 < num_3){
//          minimum = num_2; 
//     } 
//     console.log(minimum);
//     return minimum
// };

// arr_function(12, 5, 2);   

//створити функцію яка приймає три числа та виводить та повертає найбільше.

// function arr_function(num1, num2, num3){
//     let max = num3;
//     if(num1 > num2 && num1 > num3){
//         max = num1;
//     } else if (num2 > num1 && num2 > num3){
//         max = num2;
//     }
//     console.log("max", max);
//     return max;
// };

// const mix = arr_function(342, 45, 23);
// console.log("---------------------");
// console.log(mix)

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function numbers (){
//     let min = arguments[0];
//     let max = arguments[0];

//     for(item of arguments){
//         if(item > max) max = item;
//         if(item < min) min = item;
//     };

//     console.log("max ", max);
//     return min

// };

// const min = console.log(numbers(3,4, 56,45,43,65,34));
// console.log("----------------------------")







// - створити функцію яка виводить масив

// let arr = [12, 34, 3, 5, 6, 23,];

// function array_fc(){
//     console.log(arr);
//     for( index of arr){
//         console.log(index);
//     };
// };

// array_fc();




// - створити функцію яка повертає найбільше число з масиву

// let arr = [32, 4, 3, 5, 6, 23,];

// function array_max(){

//     let max = arr[0];

//     for(index of arr){
//         if(index > max) max = index;
//     };

//     console.log(max);
// };

// array_max();


// - створити функцію яка повертає найменьше число з масиву

// let arr = [-32, -1, 3, 5, 6, 23,];

// function array_min(){

//     let min = arr[0];

//     for(index of arr){
//         if(index < min) min = index;
//     };

//     console.log(min);
// };

// array_min();




// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.


// let arr = [32, -1, 3, 5, 6, 23,];

// function array_fc(array){

//     let sum = 0;

//     for(index of arr){
//         sum += index; 
//     };

//     return sum;
// };

// let summary = array_fc(arr);
// console.log(summary);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let arr = [32, -1, 3, 5, 6, 23,];

// function array_fc(array){

//     let sum = 0;
//     let arithmetic_mean = 0;

//     for(index of arr){
//         sum += index;
//     };
    
//     return sum / arr.length;

// };

// let arithmetic_mean = array_fc(arr);
// console.log(arithmetic_mean);




//  Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві


// let people = [
//     {name: "Bohdan", was_born: 1994},
//     {name: "Serhiy", was_born: 1996},
//     {name: "Vasya", was_born: 1999},
//     {name: "Dima", was_born: 1988}
// ];

// function array_fc (arr){
//     for(index of arr){
//         console.log(index);
//     };
//     return arr.length;
// };

// let array_length = array_fc(people);

// console.log(array_length);




// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


// let people = [
//     {name: "Bohdan", was_born: 1994, wife: {name: "Kate", age: 29}},
//     {name: "Serhiy", was_born: 1996},
//     {name: "Vasya", was_born: 1999, skils: "Java"},
//     {name: "Dima", was_born: 1988}
// ];

// function array_fc (arr){
//     let count = 0;
//     for(index of arr){
//         if( index.typeOf === Object && !Array.isArray(index)){
//             count++;
//         };

//         for( key in index){
//             count++;
//         };
        
//     };
//     return count;
// };

// let count = array_fc(people);
// console.log(count);




// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


// let arr_1 = [2, 4, 6, 32, 54, 23];
// let arr_2 = [3, 4, 7, 32, 23, 12];

// function arr_fc (array1, array2) {

//     let new_arr = [];

//     for(let i = 0; i < arr_1.length; i++){
//         new_arr.push(arr_1[i] + arr_2[i]);
//     };

//     return new_arr;

// };

// let result = arr_fc(arr_1, arr_2);

// console.log(result);



//  *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr_1 = [2, 4, 6, 32, 54, 23, 12, 34, 13];
// ////////////[4, 6, 32, 54, 23, 12, 34, 13, 2];

// function array_fc (arr, index){


//     for(let i = 0; i < arr_1.length -1; i++){

//         arr_1[i] = arr_1[i+1];
//         arr_1[i+1] = arr_1[i];

//     };

//     return arr;
// };

// console.log(arr_1);

// let change = array_fc(arr_1, 2)

// console.log(change);

//  *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = [1, 3, 5, 0, 7, 0, 9, 0, 0, 11, 13, 0, 15, 17, 0];//питання чому коли два нуля метод splise вирізає лише один

// function arr_fc(array, zero, step){

//     for(let i = 0; i < arr.length; i++){
//             if(arr[i] === zero) {
//                arr.splice(i, step);
//                arr.push(zero);
                
//            };
            
//     };
//     return array;
// };

// console.log(arr);
// new_array = arr_fc(arr, 0, 1);
// console.log(new_array);


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"


// function create_div (){
//     let div = document.createElement("div");
//     let text = document.createElement("p");
//     text.innerText = "Hello OWU";

//     div.classList.add("block");

//     div.appendChild(text);
//     document.body.appendChild(div);
// };

// create_div();


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи




// function create_div (string, typeTag){
//     let tag = document.createElement(typeTag);
//     tag.innerText = string;

//     document.body.appendChild(tag);
// };

// create_div("Hello OWU", "div");


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості 
// авто в обному блоці

// let arr_cars = [
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
// ];

// function cars_fc(array, div_cars){
//     let container = document.createElement(div_cars);

//     for(index of array){
//         let car = document.createElement("div");
//         car.innerHTML = `Name:  ${index.name}  model:  ${index.model}  year  ${index.graduation_year}  power: ${index.power} 
//         color:  ${index.color}`;
//         container.appendChild(car);
//     };


//     document.body.appendChild(container);
// };

// cars_fc(arr_cars, "div");


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок




// let arr_cars = [
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
// ];
// function cars_fc(array, div_cars){
//     let container = document.createElement(div_cars);
//     for(index of array){
//         let car = document.createElement("div");
//         // car.innerHTML = `Name:  ${index.name}  model:  ${index.model}  year  ${index.graduation_year}  power: ${index.power}
//         // color:  ${index.color}`;
//         container.appendChild(car);
        
//         let car_name = document.createElement("div");
//         let car_model = document.createElement("div");
//         let car_year = document.createElement("div");
//         let car_power = document.createElement("div");
//         let car_color = document.createElement("div");

//         car_name.innerText = `name: ${index.name}`;
//         car_model.innerText = `model: ${index.model}`;
//         car_year.innerText = `year: ${index.graduation_year}`;
//         car_power.innerText = `power: ${index.power}`;
//         car_color.innerText = `color: ${index.color}`;

//         car.appendChild(car_name);
//         car.appendChild(car_model);
//         car.appendChild(car_year);
//         car.appendChild(car_power);
//         car.appendChild(car_color);
//     };
//     document.body.appendChild(container);
// };
// cars_fc(arr_cars, "div");


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

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


// function concat(array_1, array_2){

//     let full_object = [];

//     for(user of array_1){
//         for(city of array_2){
//             if(user.id === city.user_id){
//                 user.adress = city;
//                 full_object.push(user);
//             };
//         };
//     };
//     return full_object;
// };

// let object = concat(usersWithId, citiesWithId);
// console.log(object);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];


// function content(array, container, className, title, body){

//     let wrap = document.createElement(container);
//     wrap.classList.add(className);

//     for(rule of array){
//         let rule_block = document.createElement(container);
//         let rule_title = document.createElement(title);
//         let rule_body = document.createElement(body);

//         rule_title.innerText = rule.title;
//         rule_body.innerText = rule.body;

//         wrap.appendChild(rule_block);
//         rule_block.appendChild(rule_title);
//         rule_block.appendChild(rule_body);
//     };

//     document.body.appendChild(wrap);

//     return wrap;

    
// };

// let list_rules = content(rules, "div", "wrap", "h2", "p");

// console.log(list_rules);




